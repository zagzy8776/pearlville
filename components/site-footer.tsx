import Link from "next/link";
import Image from "next/image";
import { schoolContent } from "@/content/school";

const footerLinks = [
  { label: "About Pearlville", href: "/about" },
  { label: "Our academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Student life", href: "/student-life" },
  { label: "News & stories", href: "/news" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="shell footer-main">
        <div className="footer-intro">
          <Link className="brand footer-brand" href="/">
            <Image className="brand-logo" src="/images/pearlville-logo.svg" alt="" width={44} height={44} />
            <span className="brand-copy"><strong>PEARLVILLE</strong><small>INTERNATIONAL SCHOOL</small></span>
          </Link>
          <p>A future-ready community where every learner is known, nurtured and inspired to make a difference.</p>
          <div className="social-links" aria-label="Social media links">
            <a href="/contact" aria-label="Instagram">ig</a>
            <a href="/contact" aria-label="Facebook">f</a>
            <a href="/contact" aria-label="LinkedIn">in</a>
          </div>
        </div>
        <div className="footer-column">
          <p className="footer-label">Explore</p>
          {footerLinks.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </div>
        <div className="footer-column">
          <p className="footer-label">Visit us</p>
          <p>{schoolContent.contact.address}</p>
          <a href={`mailto:${schoolContent.contact.email}`}>{schoolContent.contact.email}</a>
          <a href={schoolContent.contact.phoneHref}>{schoolContent.contact.phone}</a>
        </div>
        <div className="footer-column footer-newsletter">
          <p className="footer-label">Stay connected</p>
          <p>Get school news, stories and important dates in your inbox.</p>
          <form className="newsletter-form">
            <label className="sr-only" htmlFor="footer-email">Email address</label>
            <input id="footer-email" type="email" placeholder="Your email address" required />
            <button type="submit" aria-label="Subscribe to newsletter">↗</button>
          </form>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {schoolContent.contact.copyrightYear} Pearlville International School. All rights reserved.</span>
        <div><Link href="/privacy">Privacy policy</Link><Link href="/child-safeguarding">Child safeguarding</Link></div>
      </div>
    </footer>
  );
}