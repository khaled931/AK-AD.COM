"use client";

import { useEffect, useState } from "react";

const nav = [
  { href: "/", ar: "الرئيسية", en: "Home" },
  { href: "/services", ar: "الخدمات", en: "Services" },
  { href: "/pricing", ar: "الأسعار", en: "Pricing" },
  { href: "/portfolio", ar: "أعمالنا", en: "Portfolio" },
  { href: "/blog", ar: "المنشورات", en: "Posts" },
  { href: "/about", ar: "من نحن", en: "About" },
  { href: "/contact", ar: "تواصل معنا", en: "Contact" }
];

type Theme = "dark" | "light";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

export function SiteHeader() {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const [theme, setTheme] = useState<Theme>("dark");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = (window.localStorage.getItem("akad_lang") as "ar" | "en" | null) || "ar";
    const savedTheme = (window.localStorage.getItem("akad_theme") as Theme | null) || "dark";
    setLang(saved);
    setTheme(savedTheme);
    document.documentElement.dataset.currentLang = saved;
    document.documentElement.lang = saved;
    document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
    applyTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function toggleLanguage() {
    const next = lang === "ar" ? "en" : "ar";
    setLang(next);
    setOpen(false);
    window.localStorage.setItem("akad_lang", next);
    document.documentElement.dataset.currentLang = next;
    document.documentElement.lang = next;
    document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
  }

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    window.localStorage.setItem("akad_theme", next);
    applyTheme(next);
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="logo" href="/" onClick={() => setOpen(false)}>
          AK-AD <span>media</span>
        </a>

        <nav
          id="primary-navigation"
          className={`nav ${open ? "open" : ""}`}
          aria-label="Main navigation"
        >
          <div className="mobile-nav-head">
            <strong>
              <span data-lang="ar">القائمة</span>
              <span data-lang="en">Menu</span>
            </strong>
            <button className="menu-close" type="button" onClick={() => setOpen(false)} aria-label="Close menu">
              ×
            </button>
          </div>

          {nav.map((item) => (
            <a href={item.href} key={item.href} onClick={() => setOpen(false)}>
              <span data-lang="ar">{item.ar}</span>
              <span data-lang="en">{item.en}</span>
            </a>
          ))}

          <a className="mobile-nav-cta" href="/contact" onClick={() => setOpen(false)}>
            <span data-lang="ar">احصل على تقييم مجاني</span>
            <span data-lang="en">Get a free audit</span>
          </a>
        </nav>

        <div className="header-actions">
          <button className="lang-toggle" onClick={toggleLanguage} aria-label="Switch language" type="button">
            {lang === "ar" ? "EN" : "AR"}
          </button>
          <a className="btn btn-primary" href="/contact">
            <span data-lang="ar">احصل على تقييم مجاني</span>
            <span data-lang="en">Get a free audit</span>
          </a>
          <button
            className="lang-toggle theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle light and dark mode"
            title={theme === "dark" ? "Light mode" : "Dark mode"}
            type="button"
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
          <button
            className="lang-toggle mobile-menu"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="primary-navigation"
            type="button"
          >
            <span aria-hidden="true">{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      <button
        className={`menu-backdrop ${open ? "open" : ""}`}
        type="button"
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        onClick={() => setOpen(false)}
      />
    </header>
  );
}
