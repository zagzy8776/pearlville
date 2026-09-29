import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { schoolContent } from "@/content/school";

type PhasePlaceholderProps = {
  title: string;
  description: string;
};

export function PhasePlaceholder({ title, description }: PhasePlaceholderProps) {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="placeholder-page">
        <div className="shell placeholder-page-inner">
          <p className="eyebrow"><span /> Phase 2 foundation</p>
          <h1>{title}</h1>
          <p>{description}</p>
          <p className="placeholder-note">{schoolContent.placeholderNotice}</p>
          <Link className="button button-coral" href="/">Return home <span aria-hidden="true">↗</span></Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}