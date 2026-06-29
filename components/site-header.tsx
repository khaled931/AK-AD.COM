"use client";

import { useEffect, useState } from "react";

const nav = [
  { href: "/", ar: "الرئيسية", en: "Home" },
  { href: "/services", ar: "الخدمات", en: "Services" },
  { href: "/portfolio", ar: "أعمالنا", en: "Portfolio" },
  { href: "/about", ar: "من نحن", en: "About" },
  { href: "/contact", ar: "تواصل معنا", en: "Contact" }
];

type Theme = "dark" | "light";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;

  if (theme === "light") {
    root.style.setProperty("--midnight", "#F7F3EA");
    root.style.setProperty("--midnight-2", "#EFE7D7");
    root.style.setProperty("--graphite", "#FFFFFF");
    root.style.setProperty("--graphite-soft", "rgba(255, 255, 255, 0.82)");
    root.style.setProperty("--ivory", "#151922");
    root.style.setProperty("--muted", "rgba(21, 25, 34, 0.72)");
    root.style.setProperty("--muted-2", "rgba(21, 25, 34, 0.56)");
    root.style.setProperty("--border", "rgba(140, 111, 33, 0.24)");
    root.style.setProperty("--shadow", "0 20px 60px rgba(11, 15, 25, 0.12)");
    document.body.style.background =
      "radial-gradient(circle at 15% 8%, rgba(212, 180, 79, 0.20), transparent 30%), radial-gradient(circle at 80% 18%, rgba(56, 130, 246, 0.12), transparent 26%), linear-gradient(180deg, #F7F3EA, #EFE7D7 60%, #FDFBF6)";
  } else {
    root.style.setProperty("--midnight", "#0B0F19");
    root.style.setProperty("--midnight-2", "#070A12");
    root.style.setProperty("--graphite", "#2A2F3A");
    root.style.setProperty("--graphite-soft", "rgba(42, 47, 58, 0.72)");
    root.style.setProperty("--ivory", "#F5F3EE");
    root.style.setProperty("--muted", "rgba(245, 243, 238, 0.72)");
    root.style.setProperty("--muted-2", "rgba(245, 243, 238, 0.56)");
    root.style.setProperty("--border", "rgba(212, 180, 79, 0.22)");
    root.style.setProperty("--shadow", "0 24px 80px rgba(0, 0, 0, 0.28)");
    document.body.style.background =
      "radial-gradient(circle at 15% 8%, rgba(212, 180, 79, 0.18), transparent 30%), radial-gradient(circle at 80% 18%, rgba(56, 130, 246, 0.14), transparent 26%), linear-gradient(180deg, #0B0F19, #070A12 55%, #05070d)";
  }
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

  function toggleLanguage() {
    const next = lang === "ar" ? "en" : "ar";
    setLang(next);
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
          <button
            className="lang-toggle"
            onClick={toggleTheme}
            aria-label="Toggle light and dark mode"
            title={theme === "dark" ? "Light mode" : "Dark mode"}
            style={{ width: 42, minHeight: 42, padding: 0 }}
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
          <button className="lang-toggle mobile-menu" onClick={() => setOpen((value) => !value)} aria-label="Open menu">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}