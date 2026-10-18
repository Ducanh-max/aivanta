-- AIVANTA schema. Run in Supabase SQL Editor.
create table if not exists public.profiles(id uuid primary key references auth.users(id) on delete cascade,full_name text,role text not null default 'student' check(role in ('student','admin')),xp integer not null default 0 check(xp>=0),streak integer not null default 0 check(streak>=0),created_at timestamptz not null default now(),updated_at timestamptz not null default now());
alter table public.profiles enable row level security;grant select,insert,update on public.profiles to authenticated;
create policy "Read own profile" on public.profiles for select to authenticated using((select auth.uid())=id);
create policy "Create own student profile" on public.profiles for insert to authenticated with check((select auth.uid())=id and role='student');
create policy "Update own student profile" on public.profiles for update to authenticated using((select auth.uid())=id) with check((select auth.uid())=id and role='student');
create table if not exists public.courses(id text primary key,title text not null,description text not null default '',level text not null default 'BEGINNER',is_free boolean not null default false,lesson_count integer not null default 0,created_at timestamptz not null default now());
alter table public.courses enable row level security;grant select on public.courses to anon,authenticated;
create policy "Public course catalogue" on public.courses for select to anon,authenticated using(true);
create table if not exists public.lesson_progress(id uuid primary key default gen_random_uuid(),user_id uuid not null references auth.users(id) on delete cascade,course_id text not null references public.courses(id) on delete cascade,lesson_key text not null,completed_at timestamptz not null default now(),unique(user_id,course_id,lesson_key));
alter table public.lesson_progress enable row level security;grant select,insert,delete on public.lesson_progress to authenticated;
create policy "Read own progress" on public.lesson_progress for select to authenticated using((select auth.uid())=user_id);
create policy "Insert own progress" on public.lesson_progress for insert to authenticated with check((select auth.uid())=user_id);
create policy "Delete own progress" on public.lesson_progress for delete to authenticated using((select auth.uid())=user_id);
insert into public.courses(id,title,description,level,is_free,lesson_count) values('starter','English Foundation','Xây nền tảng từ vựng và ngữ pháp','BEGINNER',true,24),('daily','Everyday English','Giao tiếp tự nhiên trong đời sống','ELEMENTARY',false,32),('speaking','Speak with Confidence','Tự tin diễn đạt ý tưởng','INTERMEDIATE',false,28),('listening','Listening Lab','Luyện nghe qua tình huống thực tế','ELEMENTARY',false,20),('grammar','Grammar in Action','Ứng dụng ngữ pháp vào giao tiếp','INTERMEDIATE',false,26) on conflict(id) do update set title=excluded.title,description=excluded.description,level=excluded.level,is_free=excluded.is_free,lesson_count=excluded.lesson_count;
create or replace function public.handle_new_user() returns trigger language plpgsql security definer set search_path='' as $$ begin insert into public.profiles(id,full_name) values(new.id,coalesce(new.raw_user_meta_data->>'full_name','Học viên')) on conflict(id) do nothing;return new;end;$$;
drop trigger if exists on_auth_user_created on auth.users;create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.handle_new_user();
-- Register the owner, then promote that account manually:
-- update public.profiles set role='admin' where id=(select id from auth.users where email='YOUR_OWNER_EMAIL');
-- Never let users modify their own role; keep secret keys on the server.