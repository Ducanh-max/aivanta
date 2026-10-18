"use client";

import { useState } from "react";
import {
  ArrowRight, Sparkles, BookOpen, MessageCircle, Headphones,
  Mic2, Flame, Clock3, CheckCircle2, Play, Menu, X,
  GraduationCap, BrainCircuit, Target, ChevronRight
} from "lucide-react";

const features = [
  { icon: BookOpen, title: "Bài học tương tác", desc: "Học từ vựng và ngữ pháp qua những thử thách ngắn, dễ nhớ." },
  { icon: MessageCircle, title: "Gia sư AI 24/7", desc: "Trò chuyện, hỏi bài và nhận giải thích phù hợp với trình độ." },
  { icon: Headphones, title: "Nghe & phát âm", desc: "Luyện nghe, nói và cải thiện phát âm từng ngày." },
];

const courses = [
  { level: "BEGINNER", title: "English Foundation", desc: "Xây nền tảng từ vựng và ngữ pháp", lessons: "24 bài học", color: "mint", progress: 72, tag: "Miễn phí" },
  { level: "ELEMENTARY", title: "Everyday English", desc: "Giao tiếp tự nhiên trong đời sống", lessons: "32 bài học", color: "lavender", progress: 0, tag: "Phổ biến" },
  { level: "INTERMEDIATE", title: "Speak with Confidence", desc: "Tự tin diễn đạt ý tưởng bằng tiếng Anh", lessons: "28 bài học", color: "peach", progress: 0, tag: "Nâng cao" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const scrollToCourses = () => document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#"><span className="brand-mark"><Sparkles size={19} /></span><span>AIVANTA<span className="brand-dot">.</span></span></a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#features" onClick={() => setMenuOpen(false)}>Tính năng</a>
          <a href="#courses" onClick={() => setMenuOpen(false)}>Khóa học</a>
          <a href="#how" onClick={() => setMenuOpen(false)}>Cách học</a>
        </nav>
        <div className="nav-actions">
          <button className="login-btn" onClick={() => document.getElementById("join")?.scrollIntoView({ behavior: "smooth" })}>Đăng nhập</button>
          <button className="primary-btn nav-cta" onClick={() => document.getElementById("join")?.scrollIntoView({ behavior: "smooth" })}>Bắt đầu miễn phí <ArrowRight size={16} /></button>
        </div>
        <button className="mobile-menu" aria-label="Mở menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> HỌC THÔNG MINH HƠN VỚI AI</div>
          <h1>Tiếng Anh mở lối.<br /><span>AI đồng hành.</span></h1>
          <p className="hero-desc">Một hành trình học tiếng Anh thú vị hơn, cá nhân hóa hơn. Từng bài học nhỏ đưa bạn đến gần hơn với phiên bản tự tin của chính mình.</p>
          <div className="hero-buttons">
            <button className="primary-btn large" onClick={scrollToCourses}>Khám phá khóa học <ArrowRight size={18} /></button>
            <a className="watch-link" href="#how"><span className="play-circle"><Play size={14} fill="currentColor" /></span> Khám phá AIVANTA</a>
          </div>
          <div className="hero-proof">
            <div className="avatar-stack"><span>A</span><span>M</span><span>K</span><span>+</span></div>
            <div><strong>Học theo nhịp độ của bạn</strong><small>Không áp lực — tiến bộ mỗi ngày</small></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="orb orb-one" /><div className="orb orb-two" />
          <div className="floating-chip chip-top"><span className="chip-icon"><Flame size={17} /></span><span><b>7 ngày</b><small>Chuỗi học tập</small></span></div>
          <div className="learning-card">
            <div className="card-top"><span className="mini-label">BÀI HỌC HÔM NAY</span><span className="dots">•••</span></div>
            <div className="lesson-illustration"><div className="book-shape"><BookOpen size={45} strokeWidth={1.5} /></div><span className="sparkle s1">✦</span><span className="sparkle s2">✧</span></div>
            <div className="lesson-title">Everyday conversations</div>
            <p className="lesson-sub">Unit 04 · At the coffee shop</p>
            <div className="lesson-progress"><div><span>Tiến độ bài học</span><b>3/5</b></div><div className="progress-track"><i /></div></div>
            <button className="lesson-button" onClick={scrollToCourses}>Tiếp tục học <ArrowRight size={16} /></button>
          </div>
          <div className="floating-chip chip-bottom"><span className="score-icon"><Target size={18} /></span><span><b>+120 XP</b><small>Điểm kinh nghiệm</small></span></div>
          <div className="tiny-star star-a">✦</div><div className="tiny-star star-b">✧</div>
        </div>
      </section>

      <section className="stats-strip">
        <div><strong>01</strong><span>Lộ trình cá nhân hóa</span></div><div><strong>24/7</strong><span>AI luôn sẵn sàng</span></div><div><strong>10 phút</strong><span>Mỗi bài học ngắn gọn</span></div><div><strong>∞</strong><span>Cơ hội luyện tập</span></div>
      </section>

      <section className="section features-section" id="features">
        <div className="section-heading"><div><span className="eyebrow">TRẢI NGHIỆM AIVANTA</span><h2>Học tiếng Anh, <span>không còn nhàm chán.</span></h2></div><p>Kết hợp công nghệ AI và phương pháp học chủ động để biến mỗi ngày thành một bước tiến.</p></div>
        <div className="feature-grid">{features.map((f, i) => <article className="feature-card" key={f.title}><div className={"feature-icon feature-" + i}><f.icon size={23} /></div><span className="feature-number">0{i + 1}</span><h3>{f.title}</h3><p>{f.desc}</p><a href="#courses">Khám phá <ArrowRight size={15} /></a></article>)}</div>
      </section>

      <section className="courses-section" id="courses">
        <div className="section course-inner">
          <div className="section-heading"><div><span className="eyebrow">LỘ TRÌNH HỌC TẬP</span><h2>Bắt đầu từ <span>điều bạn cần.</span></h2></div><a className="text-link" href="#join">Xem tất cả khóa học <ArrowRight size={16} /></a></div>
          <div className="course-grid">{courses.map((c, i) => <article className="course-card" key={c.title}><div className={"course-art " + c.color}><span className="course-tag">{c.tag}</span><div className="course-art-icon">{i === 0 ? <GraduationCap size={54} /> : i === 1 ? <MessageCircle size={54} /> : <Mic2 size={54} />}</div><span className="art-index">0{i + 1}</span></div><div className="course-content"><span className="level">{c.level}</span><h3>{c.title}</h3><p>{c.desc}</p><div className="course-meta"><span><BookOpen size={14} /> {c.lessons}</span><span><Clock3 size={14} /> 10–15 phút/bài</span></div><div className="course-footer"><span>{c.progress ? "Đã học " + c.progress + "%" : "Sẵn sàng bắt đầu"}</span><button aria-label={"Xem " + c.title} onClick={() => document.getElementById("join")?.scrollIntoView({ behavior: "smooth" })}><ArrowRight size={17} /></button></div></div></article>)}</div>
        </div>
      </section>

      <section className="section how-section" id="how">
        <div className="how-visual"><div className="how-panel"><div className="panel-head"><span><BrainCircuit size={18} /> AIVANTA AI TUTOR</span><span className="online"><i /> Đang hoạt động</span></div><div className="chat-bubble ai-bubble">Hi there! 👋 What would you like to practice today?</div><div className="chat-bubble user-bubble">I want to practice ordering coffee.</div><div className="chat-bubble ai-bubble">Great choice! Let’s role-play. I’ll be the barista. ☕</div><div className="chat-input">Nhập câu trả lời của bạn... <Mic2 size={17} /></div></div><div className="ai-badge"><Sparkles size={17} /> Powered by AI</div></div>
        <div className="how-copy"><span className="eyebrow">HỌC THEO CÁCH CỦA BẠN</span><h2>Mỗi người một nhịp độ.<br /><span>Một AI đồng hành.</span></h2><p>AIVANTA giúp bạn học đúng trình độ, luyện tập trong tình huống thực tế và nhận gợi ý để tiến bộ từng ngày.</p><ul><li><CheckCircle2 size={18} /> Lộ trình rõ ràng, dễ theo dõi</li><li><CheckCircle2 size={18} /> Thực hành qua hội thoại gần gũi</li><li><CheckCircle2 size={18} /> Theo dõi tiến độ học tập</li></ul><button className="primary-btn" onClick={scrollToCourses}>Tìm lộ trình phù hợp <ArrowRight size={16} /></button></div>
      </section>

      <section className="join-section" id="join"><div className="join-card"><div className="join-glow" /><span className="eyebrow">SẴN SÀNG BẮT ĐẦU?</span><h2>Hành trình mới bắt đầu<br />từ <span>một bước nhỏ.</span></h2><p>Đăng ký nhận thông tin khi AIVANTA mở trải nghiệm học tập.</p><form className="join-form" onSubmit={(e) => { e.preventDefault(); if (email.trim()) setSubscribed(true); }}><input type="email" placeholder="Email của bạn" value={email} onChange={e => setEmail(e.target.value)} required /><button className="primary-btn" type="submit">{subscribed ? "Đã ghi nhận!" : "Tham gia ngay"} <ArrowRight size={16} /></button></form>{subscribed && <small className="success-note">Cảm ơn bạn! AIVANTA đã ghi nhận email của bạn trên trình duyệt này.</small>}<small className="privacy-note">Không spam. Chỉ gửi thông tin quan trọng về AIVANTA.</small></div></section>

      <footer className="footer"><a className="brand" href="#"><span className="brand-mark"><Sparkles size={18} /></span><span>AIVANTA<span className="brand-dot">.</span></span></a><span>Học thông minh hơn. Tự tin hơn mỗi ngày.</span><span>© 2026 AIVANTA</span></footer>
    </main>
  );
}