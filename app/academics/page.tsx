import Link from "next/link";
import { CTABanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { schoolContent } from "@/content/school";

export const metadata = {
  title: "Academics",
  description: "Explore the Pearlville learning journey from nursery through senior secondary.",
};

export default function AcademicsPage() {
  const { academics } = schoolContent;

  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <PageHero {...academics.hero} />

        <section className="academics-overview section-pad">
          <div className="shell academics-overview-grid"><Reveal><SectionHeading eyebrow="Our approach" title="Connected learning,\nconfident learners." description="Each stage builds knowledge, independence and character in ways that are age-appropriate, ambitious and connected to the wider world." /></Reveal><Reveal className="academics-overview-note"><p className="eyebrow"><span /> Curriculum note</p><p>Subject lists, exam pathways and assessment details shown here are placeholders for planning and review. Confirmed curriculum documentation will replace them in a later phase.</p></Reveal></div>
        </section>

        <section className="stages-section section-pad" id="stages">
          <div className="shell"><SectionHeading eyebrow="Learning journey" title="Every stage has its own rhythm." /><div className="stage-list">{academics.stages.map((stage, index) => <Reveal className="stage-card" key={stage.id} id={stage.id}><div className="stage-card-header"><span className="stage-number">0{index + 1}</span><div><p className="eyebrow"><span /> {stage.range}</p><h3>{stage.title}</h3></div></div><p className="stage-description">{stage.description}</p><div className="stage-details"><div><span>Subjects</span><ul>{stage.subjects.map((subject) => <li key={subject}>{subject}</li>)}</ul></div><div><span>Exam bodies</span><ul>{stage.examBodies.map((body) => <li key={body}>{body}</li>)}</ul></div></div></Reveal>)}</div></div>
        </section>

        <section className="calendar-section section-pad" id="calendar">
          <div className="shell calendar-grid"><SectionHeading eyebrow="Academic calendar" title="A year with room to grow." /><div className="calendar-list">{academics.calendar.map((term, index) => <Reveal className="calendar-item" key={term.term}><span className="calendar-number">0{index + 1}</span><div><h3>{term.term}</h3><p>{term.dates}</p><small>{term.focus}</small></div></Reveal>)}</div></div>
        </section>

        <section className="departments-section section-pad" id="departments">
          <div className="shell departments-grid"><Reveal><p className="eyebrow eyebrow-coral"><span /> Departments</p><h2>Many disciplines.<br /><em>One shared purpose.</em></h2></Reveal><div className="department-list">{academics.departments.map((department, index) => <Link href="#stages" className="department-link" key={department}><span>0{index + 1}</span>{department}<b aria-hidden="true">↗</b></Link>)}</div></div>
        </section>

        <CTABanner eyebrow="Next step" title="See how learning comes alive." description="Explore life beyond the classroom and the experiences that help learners discover their strengths." href="/student-life" label="Explore student life" />
      </main>
      <SiteFooter />
    </div>
  );
}