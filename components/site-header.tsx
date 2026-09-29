"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import { schoolContent } from "@/content/school";

const THEME_CHANGE_EVENT = "pearlville-theme-change";

const navigation = [
  { label: "Admissions", href: "/admissions" },
  { label: "Student Life", href: "/student-life" },
  { label: "News", href: "/news" },
];

const megaMenus = {
  about: {
    label: "About",
    href: "/about",
    items: [
      { label: "Our story", detail: "History, mission and vision", href: "/about#history" },
      { label: "Values", detail: "What guides our community", href: "/about#values" },
      { label: "Campus and policies", detail: "Spaces, people and trust", href: "/about#campus" },
    ],
  },
  academics: {
    label: "Academics",
    href: "/academics",
    items: [
      { label: "Learning journey", detail: "Nursery through senior secondary", href: "/academics#stages" },
      { label: "Academic calendar", detail: "Terms and learning rhythms", href: "/academics#calendar" },
      { label: "Departments", detail: "The people behind the subjects", href: "/academics#departments" },
    ],
  },
} as const;

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="menu-icon" aria-hidden="true">
      <span className={open ? "menu-line menu-line-top menu-line-open" : "menu-line menu-line-top"} />
      <span className={open ? "menu-line menu-line-middle menu-line-hidden" : "menu-line menu-line-middle"} />
      <span className={open ? "menu-line menu-line-bottom menu-line-open-bottom" : "menu-line menu-line-bottom"} />
    </span>
  );
}

function subscribeToTheme(callback: () => void) {
  window.addEventListener(THEME_CHANGE_EVENT, callback);
  return () => window.removeEventListener(THEME_CHANGE_EVENT, callback);
}

function getThemeSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function getServerThemeSnapshot() {
  return false;
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState<keyof typeof megaMenus | null>(null);
  const darkMode = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerThemeSnapshot);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const storedTheme = window.localStorage.getItem("pearlville-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = storedTheme ? storedTheme === "dark" : prefersDark;

    document.documentElement.classList.toggle("dark", shouldUseDark);
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toggleTheme() {
    const nextTheme = !darkMode;
    document.documentElement.classList.toggle("dark", nextTheme);
    window.localStorage.setItem("pearlville-theme", nextTheme ? "dark" : "light");
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }

  return (
    <header className={scrolled ? "site-header site-header-scrolled" : "site-header"}>
      <div className="topbar">
        <div className="shell topbar-inner">
          <span>Now enrolling for the {schoolContent.contact.academicYear} academic session</span>
          <div className="topbar-links">
            <a href={schoolContent.contact.phoneHref}>{schoolContent.contact.phone}</a>
            <span className="topbar-divider" />
            <a href={`mailto:${schoolContent.contact.email}`}>{schoolContent.contact.email}</a>
          </div>
        </div>
      </div>

      <nav className="shell main-nav" aria-label="Primary navigation">
        <Link className="brand" href="/" aria-label="Pearlville International School home" onClick={() => setMenuOpen(false)}>
          <Image className="brand-logo" src="/images/pearlville-logo.svg" alt="" width={44} height={44} priority />
          <span className="brand-copy">
            <strong>PEARLVILLE</strong>
            <small>INTERNATIONAL SCHOOL</small>
          </span>
        </Link>

        <div className={menuOpen ? "nav-links nav-links-open" : "nav-links"}>
          {(Object.entries(megaMenus) as Array<[keyof typeof megaMenus, (typeof megaMenus)[keyof typeof megaMenus]]>).map(([key, menu]) => (
            <div className="nav-menu-group" key={key}>
              <button className="nav-menu-trigger" type="button" aria-expanded={megaOpen === key} onClick={() => setMegaOpen(megaOpen === key ? null : key)}>
                {menu.label}<span aria-hidden="true">⌄</span>
              </button>
              <div className={megaOpen === key ? "mega-menu mega-menu-open" : "mega-menu"}>
                <Link className="mega-menu-lead" href={menu.href} onClick={() => { setMegaOpen(null); setMenuOpen(false); }}><strong>Explore {menu.label.toLowerCase()}</strong><small>View the full page ↗</small></Link>
                {menu.items.map((item) => <Link href={item.href} key={item.href} onClick={() => { setMegaOpen(null); setMenuOpen(false); }}><strong>{item.label}</strong><small>{item.detail}</small></Link>)}
              </div>
            </div>
          ))}
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="nav-contact mobile-nav-contact" onClick={() => setMenuOpen(false)}>
            Contact us <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="nav-actions">
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}>
            <span aria-hidden="true">{darkMode ? "☼" : "◐"}</span>
          </button>
          <Link href="/contact" className="nav-contact desktop-nav-contact">
            Contact us <span aria-hidden="true">↗</span>
          </Link>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}>
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </nav>
    </header>
  );
}