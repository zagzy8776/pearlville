import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { schoolContent } from "@/content/school";

export const metadata = { title: "Contact", description: "Contact Pearlville International School by phone, email, WhatsApp or validated enquiry form." };

export default function ContactPage() {
  const { contact, contactPage } = schoolContent;

  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <PageHero {...contactPage.hero} />
        <section className="contact-details-section section-pad"><div className="shell"><SectionHeading eyebrow="Reach the school" title="We are here to help." description="Use the details below for the current foundation build. Contact information and office hours are placeholders until Pearlville confirms them." /><div className="contact-details-grid"><Reveal className="contact-detail-card"><span className="contact-detail-label">Call</span><a href={contact.phoneHref}>{contact.phone}</a><small>Placeholder phone number</small></Reveal><Reveal className="contact-detail-card"><span className="contact-detail-label">Email</span><a href={`mailto:${contact.email}`}>{contact.email}</a><small>Placeholder email address</small></Reveal><Reveal className="contact-detail-card"><span className="contact-detail-label">WhatsApp</span><a href={contact.whatsappHref}>Chat to the school ↗</a><small>Placeholder WhatsApp link</small></Reveal><Reveal className="contact-detail-card"><span className="contact-detail-label">Visit</span><address>{contact.address}</address><small>Placeholder campus address</small></Reveal></div></div></section>
        <section className="contact-main-section section-pad" id="message"><div className="shell contact-main-grid"><Reveal className="contact-form-card"><SectionHeading eyebrow="Send a message" title="What can we help with?" description="Please use the form below. It validates your message locally and currently uses a clearly marked no-backend stub." /><ContactForm /></Reveal><div className="contact-side"><Reveal className="map-placeholder"><div role="img" aria-label="Map embed placeholder"><span className="map-placeholder-pin">✦</span><strong>Map embed placeholder</strong><p>{contactPage.mapNote}</p></div></Reveal><Reveal className="office-hours-card"><p className="eyebrow"><span /> Office hours</p><p className="office-hours-note">{contactPage.officeHoursNote}</p><dl>{contact.officeHours.map((officeHour) => <div key={officeHour.days}><dt>{officeHour.days}</dt><dd>{officeHour.hours}</dd></div>)}</dl></Reveal></div></div></section>
        <section className="contact-next-section section-pad"><div className="shell contact-next-grid"><SectionHeading eyebrow="Useful next steps" title="Find the page you need." /><div className="contact-next-links"><Link href="/admissions" className="contact-next-link"><span><strong>Admissions</strong><small>Application process and requirements</small></span><b aria-hidden="true">↗</b></Link><Link href="/academics" className="contact-next-link"><span><strong>Academics</strong><small>Learning stages and subjects</small></span><b aria-hidden="true">↗</b></Link><Link href="/about" className="contact-next-link"><span><strong>About Pearlville</strong><small>Our story, values and campus</small></span><b aria-hidden="true">↗</b></Link></div></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}