import Image from "next/image";
import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  breadcrumb?: string;
};

export function PageHero({ eyebrow, title, description, image, imageAlt, breadcrumb }: PageHeroProps) {
  return (
    <section className="page-hero" aria-labelledby="page-hero-title">
      <Image className="page-hero-image" src={image} alt={imageAlt} fill priority sizes="100vw" />
      <div className="page-hero-overlay" />
      <div className="shell page-hero-content">
        <nav className="page-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><span>{breadcrumb ?? eyebrow}</span>
        </nav>
        <p className="eyebrow eyebrow-light"><span /> {eyebrow}</p>
        <h1 id="page-hero-title">{title.split("\n").map((line, index) => <span key={`${line}-${index}`}>{index > 0 && <br />}{index % 2 === 1 ? <em className="page-hero-emphasis">{line}</em> : line}</span>)}</h1>
        <p className="page-hero-description">{description}</p>
      </div>
    </section>
  );
}