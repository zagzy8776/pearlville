import Link from "next/link";
import { AdmissionsForm } from "@/components/admissions-form";
import { CTABanner } from "@/components/cta-banner";
import { FAQAccordion } from "@/components/faq-accordion";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { schoolContent } from "@/content/school";

export const metadata = { title: "Admissions", description: "Explore the Pearlville admissions journey, requirements and application enquiry form." };

export default function AdmissionsPage() {
  const { admissions } = schoolContent;

  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <PageHero {...admissions.hero} />
        <section className="admissions-intro section-pad"><div className="shell admissions-intro-grid"><Reveal><SectionHeading eyebrow="A considered beginning" title="The right next step starts with a conversation." description="Every family’s journey is different. Our admissions team is here to answer questions, share what we know and make the next step clear." /></Reveal><Reveal className="admissions-intro-note"><p className="eyebrow"><span /> Placeholder notice</p><p>{schoolContent.placeholderNotice}</p></Reveal></div></section>
        <section className="admissions-process section-pad" id="process"><div className="shell"><SectionHeading eyebrow="How it works" title="A simple path to Pearlville." /><div className="admissions-process-grid">{admissions.process.map((step) => <Reveal className="admission-step" key={step.number}><span className="admission-step-number">{step.number}</span><h3>{step.title}</h3><p>{step.text}</p><small>Placeholder process step</small></Reveal>)}</div></div></section>
        <section className="requirements-section section-pad" id="requirements"><div className="shell requirements-grid"><Reveal><SectionHeading eyebrow="What you may need" title="Prepared for the next conversation." description="The list below is a planning placeholder. The school will confirm the final requirements for each entry stage." /></Reveal><Reveal className="requirements-card"><ul>{admissions.requirements.map((requirement) => <li key={requirement}><span aria-hidden="true">✓</span>{requirement}</li>)}</ul></Reveal></div></section>
        <section className="fees-section section-pad" id="fees"><div className="shell"><SectionHeading eyebrow="Fees" title="Clear information, when confirmed." description="No realistic fee amounts have been invented. Every figure below is intentionally marked for confirmation." /><div className="fee-table-wrap"><table className="fee-table"><caption className="sr-only">Placeholder admissions fee table</caption><thead><tr><th scope="col">Item</th><th scope="col">Amount</th><th scope="col">Note</th></tr></thead><tbody>{admissions.fees.map((fee) => <tr key={fee.item}><th scope="row">{fee.item}</th><td>{fee.amount}</td><td>{fee.note}</td></tr>)}</tbody></table></div></div></section>
        <section className="downloads-section section-pad" id="downloads"><div className="shell"><SectionHeading eyebrow="Downloads" title="Useful documents, coming soon." /><div className="downloads-grid">{admissions.downloads.map((download) => <Reveal className="download-card" key={download.title}><span className="download-status">{download.status}</span><h3>{download.title}</h3><p>{download.text}</p><span className="download-arrow" aria-hidden="true">↓</span></Reveal>)}</div></div></section>
        <section className="application-section section-pad" id="application"><div className="shell application-grid"><div className="application-intro"><SectionHeading eyebrow="Application enquiry" title="Tell us a little about your family." description="This is a validated interface preview only. Nothing is sent to the school until a backend is connected." /><Link className="text-link" href={`mailto:${schoolContent.contact.email}`}>Email the admissions team <span aria-hidden="true">↗</span></Link></div><Reveal className="application-card"><AdmissionsForm /></Reveal></div></section>
        <section className="faq-section section-pad" id="faq"><div className="shell faq-grid"><SectionHeading eyebrow="Questions, answered" title="What families ask first." /><Reveal><FAQAccordion items={admissions.faqs} /></Reveal></div></section>
        <CTABanner eyebrow="Still exploring?" title="Come and see Pearlville for yourself." description="Contact the school to ask about visits, entry stages and the next confirmed admissions dates." href="/contact" label="Contact the school" />
      </main>
      <SiteFooter />
    </div>
  );
}