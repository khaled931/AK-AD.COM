"use client";

import { useEffect, useState } from "react";

const nav = [
  { href: "/", ar: "الرئيسية", en: "Home" },
  { href: "/services", ar: "الخدمات", en: "Services" },
  { href: "/portfolio", ar: "أعمالنا", en: "Portfolio" },
  { href: "/about", ar: "من نحن", en: "About" },
  { href: "/contact", ar: "تواصل معنا", en: "Contact" }
];

export function SiteHeader() {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = (window.localStorage.getItem("akad_lang") as "ar" | "en" | null) || "ar";
    setLang(saved);
    document.documentElement.dataset.currentLang = saved;
    document.documentElement.lang = saved;
    document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
  }, []);

  function toggleLanguage() {
    const next = lang === "ar" ? "en" : "ar";
    setLang(next);
    window.localStorage.setItem("akad_lang", next);
    document.documentElement.dataset.currentLang = next;
    document.documentElement.lang = next;
    document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="logo" href="/">
          AK-AD <span>media</span>
        </a>

        <nav className={`nav ${open ? "open" : ""}`} aria-label="Main navigation">
          {nav.map((item) => (
            <a href={item.href} key={item.href} onClick={() => setOpen(false)}>
              <span data-lang="ar">{item.ar}</span>
              <span data-lang="en">{item.en}</span>
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button className="lang-toggle" onClick={toggleLanguage} aria-label="Switch language">
            {lang === "ar" ? "EN" : "AR"}
          </button>
          <a className="btn btn-primary" href="/contact">
            <span data-lang="ar">احصل على تقييم مجاني</span>
            <span data-lang="en">Get a free audit</span>
          </a>
          <button className="lang-toggle mobile-menu" onClick={() => setOpen((value) => !value)}>
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}