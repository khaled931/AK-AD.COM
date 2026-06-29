export function ThemeScript() {
  const code = `
    (function () {
      try {
        var theme = localStorage.getItem('akad_theme') || 'dark';
        document.documentElement.dataset.theme = theme;
      } catch (error) {
        document.documentElement.dataset.theme = 'dark';
      }
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
