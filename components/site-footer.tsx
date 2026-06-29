const links = [
  { href: "/", ar: "الرئيسية", en: "Home" },
  { href: "/services", ar: "الخدمات", en: "Services" },
  { href: "/portfolio", ar: "أعمالنا", en: "Portfolio" },
  { href: "/about", ar: "من نحن", en: "About" },
  { href: "/contact", ar: "تواصل معنا", en: "Contact" }
];

const services = [
  ["إدارة السوشال ميديا", "Social media management"],
  ["الهوية البصرية", "Brand identity"],
  ["الإعلانات الممولة", "Paid ads"],
  ["صناعة المحتوى", "Content creation"],
  ["Google Business Profile", "Google Business Profile"],
  ["تصميم المواقع", "Web design"]
];

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>AK-AD <span className="gold">media</span></h3>
            <p className="eyebrow">Digital Presence. Real Growth.</p>
            <p className="muted" data-lang="ar">
              نساعد الشركات السورية على بناء حضور رقمي احترافي يجذب العملاء ويحقق النمو.
            </p>
            <p className="muted" data-lang="en">
              We help Syrian businesses build a professional digital presence that attracts customers and drives growth.
            </p>
          </div>

          <div>
            <h3>
              <span data-lang="ar">روابط سريعة</span>
              <span data-lang="en">Quick links</span>
            </h3>
            <ul className="list">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>
                    <span data-lang="ar">{link.ar}</span>
                    <span data-lang="en">{link.en}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>
              <span data-lang="ar">الخدمات</span>
              <span data-lang="en">Services</span>
            </h3>
            <ul className="list">
              {services.map(([ar, en]) => (
                <li key={ar}>
                  <span data-lang="ar">{ar}</span>
                  <span data-lang="en">{en}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>
              <span data-lang="ar">التواصل</span>
              <span data-lang="en">Contact</span>
            </h3>
            <ul className="list">
              <li><a href="https://wa.me/4740381834">WhatsApp</a></li>
              <li><a href="https://www.facebook.com/profile.php?id=61589601436614">Facebook</a></li>
              <li><a href="https://www.instagram.com/akad.media0?igsh=eWx1dGhqY3oyenhs">Instagram</a></li>
              <li><a href="mailto:contact@ak-ad.com">contact@ak-ad.com</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 AK-AD media. All rights reserved.</span>
          <span>Privacy Policy | Terms</span>
        </div>
      </div>
    </footer>
  );
}