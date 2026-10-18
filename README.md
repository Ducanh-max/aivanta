# AIVANTA — AI English Learning Platform
Included: responsive landing page, Supabase email/password auth, learner dashboard, five course previews (one free), sample interactive lesson, AI Tutor API, admin user management API and RLS schema.
## Setup
1. npm install; copy .env.example to .env.local.
2. Create/select a Supabase project for AIVANTA. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY.
3. Run supabase/schema.sql in Supabase SQL Editor.
4. Configure Supabase Auth URL settings for http://localhost:3000 and your production URL.
5. Set OPENAI_API_KEY for AI Tutor. Set SUPABASE_SECRET_KEY (server-only) for admin account management.
6. Register the owner, then run the final SQL statement in schema.sql to promote the profile to admin.
7. npm run dev
Routes: /, /login, /register, /dashboard, /learn/starter, /admin.
Locked courses are previews only; AI and admin actions need server environment secrets. Never commit real keys.