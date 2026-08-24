export function LightThemeFix() {
  return (
    <style>{`
      html[data-theme="light"] {
        --ivory: #151922;
        --muted: rgba(21, 25, 34, 0.76);
        --muted-2: rgba(21, 25, 34, 0.58);
        --border: rgba(140, 111, 33, 0.24);
        --glass-bg: rgba(255, 255, 255, 0.66);
        --glass-bg-strong: rgba(249, 246, 238, 0.88);
        --glass-border: rgba(140, 111, 33, 0.20);
        --glass-highlight: rgba(255, 255, 255, 0.86);
        --glass-shadow: 0 18px 52px rgba(24, 28, 36, 0.10);
      }

      html[data-theme="light"] body {
        background:
          radial-gradient(circle at 15% 8%, rgba(212, 180, 79, 0.20), transparent 30%),
          radial-gradient(circle at 80% 18%, rgba(56, 130, 246, 0.12), transparent 26%),
          linear-gradient(180deg, #F7F3EA, #EFE7D7 60%, #FDFBF6);
        color: var(--ivory);
      }

      html[data-theme="light"] .table th,
      html[data-theme="light"] .eyebrow,
      html[data-theme="light"] .gold,
      html[data-theme="light"] .badge,
      html[data-theme="light"] .logo span,
      html[data-theme="light"] .nav a:hover {
        color: #8C6F21;
      }

      html[data-theme="light"] .float-card strong {
        color: #151922;
      }

      html[data-theme="light"] .hero-visual {
        background:
          linear-gradient(135deg, rgba(212, 180, 79, 0.22), transparent 42%),
          radial-gradient(circle at 70% 20%, rgba(56, 130, 246, 0.16), transparent 32%),
          rgba(255, 255, 255, 0.62);
        border-color: rgba(140, 111, 33, 0.24);
      }

      html[data-theme="light"] .input,
      html[data-theme="light"] .select,
      html[data-theme="light"] .textarea {
        background: rgba(255, 255, 255, 0.76);
        border-color: rgba(140, 111, 33, 0.26);
      }

      html[data-theme="light"] .input::placeholder,
      html[data-theme="light"] .textarea::placeholder {
        color: rgba(21, 25, 34, 0.46);
      }
    `}</style>
  );
}
