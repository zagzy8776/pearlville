import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { schoolContent } from "@/content/school";

export default function Home() {
  const { homepage } = schoolContent;

  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <Image className="hero-image" src="/images/pearlville-campus.png" alt="Pearlville learners on campus" fill priority sizes="100vw" />
          <div className="hero-overlay" />
          <div className="hero-grain" />
          <div className="shell hero-content">
            <p className="eyebrow eyebrow-light"><span /> A place to become</p>
            <h1 id="hero-title">Learn boldly.<br /><em>Live fully.</em><br />Lead kindly.</h1>
            <p className="hero-copy">A joyful, ambitious learning community in the heart of Nigeria, preparing young people to shape a brighter world.</p>
            <div className="hero-actions">
              <Link href="/admissions" className="button button-coral">Explore admissions <span aria-hidden="true">↗</span></Link>
              <Link href="/about" className="button button-ghost-light">Discover Pearlville <span aria-hidden="true">↓</span></Link>
            </div>
          </div>
          <div className="shell hero-bottomline">
            <span>Nursery · Primary · Secondary</span>
            <span className="hero-scroll">Scroll to explore <b>↓</b></span>
          </div>
        </section>

        <section className="announcement-bar" aria-label="School announcement">
          <div className="shell announcement-inner"><span className="announcement-dot" /> <strong>Admissions open</strong><span>Applications for the {schoolContent.contact.academicYear} academic year are now being received.</span><Link href="/admissions">Start an application <span aria-hidden="true">↗</span></Link></div>
        </section>

        <section className="intro-section section-pad" id="about">
          <div className="shell intro-grid">
            <div className="intro-heading reveal-up"><p className="eyebrow"><span /> The Pearlville difference</p><h2>Education that<br /><em>stays with you.</em></h2></div>
            <div className="intro-copy reveal-up"><p className="large-copy">At Pearlville, we believe school should be more than a place to prepare for exams. It should be a place to find your voice, build lasting friendships and discover the kind of person you want to become.</p><Link className="text-link" href="/academics">Meet our approach <span aria-hidden="true">↗</span></Link></div>
          </div>
          <div className="shell stat-grid">
              {homepage.stats.map((stat) => <div className="stat-card" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
          </div>
        </section>

        <section className="feature-section section-pad" id="academics">
          <div className="shell feature-grid">
            <div className="feature-image-wrap reveal-up"><Image src="/images/pearlville-learning.png" alt="Learners collaborating at Pearlville" fill sizes="(max-width: 900px) 100vw, 50vw" /><span className="image-note">Learning in motion</span></div>
            <div className="feature-copy reveal-up"><p className="eyebrow eyebrow-coral"><span /> Our promise</p><h2>Room to grow.<br /><em>Space to shine.</em></h2><p>Our classrooms are curious, our corridors are kind and our curriculum is designed around the whole child. We pair academic rigour with the freedom to explore, create and contribute.</p><div className="pillar-list">{homepage.learningPillars.map((pillar) => <div className="pillar" key={pillar.number}><span className="pillar-number">{pillar.number}</span><div><h3>{pillar.title}</h3><p>{pillar.text}</p></div></div>)}</div><Link className="text-link" href="/student-life">See life at Pearlville <span aria-hidden="true">↗</span></Link></div>
          </div>
        </section>

        <section className="quote-section section-pad" id="student-life">
          <div className="shell quote-grid"><div className="quote-mark">“</div><blockquote>{schoolContent.homepage.quote}</blockquote><div className="quote-caption"><span className="quote-line" /> <span>{schoolContent.principal.name}<br /><small>{schoolContent.principal.title}</small></span></div></div>
        </section>

        <section className="admissions-section" id="admissions">
          <div className="admissions-image"><Image src="/images/pearlville-community.png" alt="Pearlville students walking together" fill sizes="50vw" /></div>
          <div className="admissions-panel"><p className="eyebrow eyebrow-light"><span /> Begin your journey</p><h2>Your next chapter<br /><em>starts here.</em></h2><p>Come and see what makes Pearlville feel different. Book a tour, meet our team and find your place in our community.</p><Link href="/contact" className="button button-coral">Plan a visit <span aria-hidden="true">↗</span></Link></div>
        </section>

        <section className="news-section section-pad" id="news"><div className="shell"><div className="section-heading-row"><div><p className="eyebrow"><span /> From the community</p><h2>Stories worth<br /><em>sharing.</em></h2></div><Link className="text-link" href="/news">View all stories <span aria-hidden="true">↗</span></Link></div><div className="news-grid"><article className="news-card news-card-large"><div className="news-image"><Image src="/images/pearlville-students.png" alt="Pearlville students celebrating" fill sizes="(max-width: 700px) 100vw, 50vw" /></div><p className="news-meta">{schoolContent.homepage.news[0].category} · {schoolContent.homepage.news[0].date}</p><h3>{schoolContent.homepage.news[0].title}</h3><Link className="text-link" href="/news">Read story <span aria-hidden="true">↗</span></Link></article><article className="news-card"><div className="news-image"><Image src="/images/pearlville-campus.png" alt="Pearlville campus" fill sizes="(max-width: 700px) 100vw, 25vw" /></div><p className="news-meta">{schoolContent.homepage.news[1].category} · {schoolContent.homepage.news[1].date}</p><h3>{schoolContent.homepage.news[1].title}</h3><Link className="text-link" href="/news">Read story <span aria-hidden="true">↗</span></Link></article><article className="news-card news-card-note"><span className="note-icon">✦</span><h3>What’s happening this term</h3><p>Open days, exhibitions, fixtures and community gatherings.</p><Link className="text-link" href="/events">View the calendar <span aria-hidden="true">↗</span></Link></article></div></div></section>
      </main>
      <SiteFooter />
      <a className="whatsapp-float" href={schoolContent.contact.whatsappHref} aria-label="Chat with Pearlville on WhatsApp">
        <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
          <path d="M16 3.2a12.7 12.7 0 0 0-10.9 19L3.4 28.8l6.8-1.7A12.8 12.8 0 1 0 16 3.2Zm0 23.3a10.5 10.5 0 0 1-5.4-1.5l-.4-.2-4 .9 1-3.9-.3-.4A10.5 10.5 0 1 1 16 26.5Zm5.8-7.8c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-.9 1.2-.3.3-.6.1a8.5 8.5 0 0 1-2.5-1.5 9.3 9.3 0 0 1-1.7-2.1c-.2-.3 0-.5.2-.7l.5-.6.2-.5c.1-.2 0-.4 0-.6l-.9-2.1c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.9 1.2 3.3 1.4 3.5a12.1 12.1 0 0 0 4.7 4.2c.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.8-.7 2-1.4s.3-1.3.2-1.4-.2-.2-.5-.4Z" fill="currentColor" />
        </svg>
      </a>
    </div>
  );
}
