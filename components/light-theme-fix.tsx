export function LightThemeFix() {
  return (
    <style>{`
      html[data-theme="light"] body {
        background: radial-gradient(circle at 15% 8%, rgba(212, 180, 79, 0.20), transparent 30%), radial-gradient(circle at 80% 18%, rgba(56, 130, 246, 0.12), transparent 26%), linear-gradient(180deg, #F7F3EA, #EFE7D7 60%, #FDFBF6) !important;
        color: #151922;
      }

      html[data-theme="light"] .site-header {
        background: rgba(247, 243, 234, 0.86);
        border-bottom-color: rgba(140, 111, 33, 0.22);
      }

      html[data-theme="light"] .card,
      html[data-theme="light"] .float-card,
      html[data-theme="light"] .problem-item,
      html[data-theme="light"] .faq details,
      html[data-theme="light"] .before-after div,
      html[data-theme="light"] .option,
      html[data-theme="light"] .notice {
        background: rgba(255, 255, 255, 0.82) !important;
        color: #151922 !important;
        border-color: rgba(140, 111, 33, 0.24) !important;
        box-shadow: 0 20px 60px rgba(11, 15, 25, 0.10);
      }

      html[data-theme="light"] .before-after div:last-child,
      html[data-theme="light"] .featured .badge {
        background: rgba(212, 180, 79, 0.14) !important;
      }

      html[data-theme="light"] .muted,
      html[data-theme="light"] .lead,
      html[data-theme="light"] .list li,
      html[data-theme="light"] .nav,
      html[data-theme="light"] .footer a,
      html[data-theme="light"] .footer-bottom {
        color: rgba(21, 25, 34, 0.74) !important;
      }

      html[data-theme="light"] h1,
      html[data-theme="light"] h2,
      html[data-theme="light"] h3,
      html[data-theme="light"] .logo,
      html[data-theme="light"] strong,
      html[data-theme="light"] .table td {
        color: #151922 !important;
      }

      html[data-theme="light"] .input,
      html[data-theme="light"] .select,
      html[data-theme="light"] .textarea,
      html[data-theme="light"] .lang-toggle,
      html[data-theme="light"] .btn-secondary {
        background: rgba(255, 255, 255, 0.88) !important;
        color: #151922 !important;
        border-color: rgba(140, 111, 33, 0.28) !important;
      }

      html[data-theme="light"] .footer {
        background: rgba(247, 243, 234, 0.94) !important;
      }

      html[data-theme="light"] .table th,
      html[data-theme="light"] .eyebrow,
      html[data-theme="light"] .gold,
      html[data-theme="light"] .logo span,
      html[data-theme="light"] .nav a:hover {
        color: #8C6F21 !important;
      }

      html[data-theme="light"] .hero-visual {
        background: linear-gradient(135deg, rgba(212, 180, 79, 0.22), transparent 42%), radial-gradient(circle at 70% 20%, rgba(56, 130, 246, 0.16), transparent 32%), rgba(255, 255, 255, 0.64) !important;
        border-color: rgba(140, 111, 33, 0.24) !important;
      }
    `}</style>
  );
}
