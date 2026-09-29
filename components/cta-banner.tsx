import Link from "next/link";

type CTABannerProps = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  label: string;
};

export function CTABanner({ eyebrow, title, description, href, label }: CTABannerProps) {
  return (
    <section className="cta-banner">
      <div className="shell cta-banner-inner">
        <div>
          <p className="eyebrow eyebrow-light"><span /> {eyebrow}</p>
          <h2>{title}</h2>
          <p className="cta-banner-description">{description}</p>
        </div>
        <Link className="button button-coral" href={href}>{label} <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  );
}