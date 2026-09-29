import Image from "next/image";
import Link from "next/link";
import { CTABanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { schoolContent } from "@/content/school";

export const metadata = {
  title: "About Pearlville",
  description: "Discover the story, principles and people behind Pearlville International School.",
};

export default function AboutPage() {
  const { about } = schoolContent;

  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <PageHero {...about.hero} />

        <section className="about-intro section-pad">
          <div className="shell about-intro-grid">
            <Reveal><SectionHeading eyebrow="Our story" title="A thoughtful beginning." description={schoolContent.placeholderNotice} /></Reveal>
            <Reveal className="about-motto-card"><span className="about-motto-mark">✦</span><p className="about-motto-label">Our motto</p><blockquote>{about.motto}</blockquote></Reveal>
          </div>
        </section>

        <section className="timeline-section section-pad" id="history">
          <div className="shell">
            <SectionHeading eyebrow="Our history" title="Built with purpose." />
            <div className="history-timeline">
              {about.timeline.map((item) => <Reveal className="timeline-item" key={item.year}><span className="timeline-year">{item.year}</span><div><h3>{item.title}</h3><p>{item.text}</p><small>Placeholder history entry</small></div></Reveal>)}
            </div>
          </div>
        </section>

        <section className="mission-section section-pad" id="values">
          <div className="shell mission-grid">
            <Reveal><p className="eyebrow"><span /> What guides us</p><h2>Clear purpose.<br /><em>Open possibility.</em></h2></Reveal>
            <div className="mission-copy"><Reveal><div className="mission-block"><span>Mission</span><p>{about.mission}</p></div></Reveal><Reveal><div className="mission-block"><span>Vision</span><p>{about.vision}</p></div></Reveal></div>
          </div>
          <div className="shell values-grid">{about.values.map((value, index) => <Reveal className="value-card" key={value.title}><span className="value-index">0{index + 1}</span><h3>{value.title}</h3><p>{value.text}</p></Reveal>)}</div>
        </section>

        <section className="principal-section section-pad">
          <div className="shell principal-grid">
            <div className="principal-image"><Image src="/images/pearlville-community.png" alt="Pearlville students walking together" fill sizes="(max-width: 900px) 100vw, 45vw" /></div>
            <Reveal className="principal-copy"><p className="eyebrow eyebrow-coral"><span /> A message from our principal</p><h2>Education begins<br /><em>with relationship.</em></h2><blockquote>“{about.principalMessage}”</blockquote><p className="principal-name">{schoolContent.principal.name}<br /><small>{schoolContent.principal.title} · Placeholder profile</small></p></Reveal>
          </div>
        </section>

        <section className="facilities-section section-pad" id="campus">
          <div className="shell"><SectionHeading eyebrow="Our campus" title="Spaces that invite discovery." /><div className="facilities-grid">{about.facilities.map((facility, index) => <Reveal className="facility-card" key={facility.title}><span className="facility-number">0{index + 1}</span><h3>{facility.title}</h3><p>{facility.text}</p></Reveal>)}</div></div>
        </section>

        <section className="policies-section section-pad">
          <div className="shell policies-grid"><SectionHeading eyebrow="Transparency" title="Policies that build trust." /><div className="policy-list">{about.policies.map((policy) => <Link className="policy-link" href={policy.href} key={policy.title}><span><strong>{policy.title}</strong><small>{policy.text}</small></span><span aria-hidden="true">↗</span></Link>)}</div></div>
        </section>

        <CTABanner eyebrow="Continue exploring" title="Find your place at Pearlville." description="Learn more about the curriculum, community and next steps for your family." href="/academics" label="Explore academics" />
      </main>
      <SiteFooter />
    </div>
  );
}