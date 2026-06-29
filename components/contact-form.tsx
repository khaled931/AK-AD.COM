const services = [
  "إدارة السوشال ميديا",
  "الهوية البصرية",
  "الإعلانات الممولة",
  "صناعة المحتوى",
  "موقع إلكتروني",
  "Google Business Profile",
  "باقة إطلاق الوجود الرقمي",
  "استشارة تسويقية",
  "أخرى"
];

const budgets = [
  "أقل من 100 دولار",
  "100 - 300 دولار",
  "300 - 700 دولار",
  "أكثر من 700 دولار",
  "غير محدد بعد"
];

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ak-ad.com";
const formEndpoint = process.env.NEXT_PUBLIC_FORMSUBMIT_ENDPOINT || "https://formsubmit.co/contact@ak-ad.com";

export function ContactForm() {
  return (
    <form
      action={formEndpoint}
      className="form card"
      method="POST"
    >
      <input type="hidden" name="_subject" value="طلب تواصل جديد من موقع AK-AD media" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value={`${siteUrl}/thank-you`} />
      <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      <div className="grid grid-2">
        <div className="field">
          <label>
            <span data-lang="ar">الاسم</span>
            <span data-lang="en">Name</span>
          </label>
          <input className="input" name="name" required />
        </div>
        <div className="field">
          <label>
            <span data-lang="ar">اسم الشركة</span>
            <span data-lang="en">Company name</span>
          </label>
          <input className="input" name="company" required />
        </div>
      </div>

      <div className="grid grid-2">
        <div className="field">
          <label>
            <span data-lang="ar">رقم الهاتف</span>
            <span data-lang="en">Phone</span>
          </label>
          <input className="input" name="phone" required />
        </div>
        <div className="field">
          <label>
            <span data-lang="ar">البريد الإلكتروني</span>
            <span data-lang="en">Email</span>
          </label>
          <input className="input" name="email" type="email" required />
        </div>
      </div>

      <div className="grid grid-2">
        <div className="field">
          <label>
            <span data-lang="ar">نوع الخدمة المطلوبة</span>
            <span data-lang="en">Requested service</span>
          </label>
          <select className="select" name="service" required>
            <option value="">—</option>
            {services.map((service) => <option key={service}>{service}</option>)}
          </select>
        </div>
        <div className="field">
          <label>
            <span data-lang="ar">الميزانية التقريبية</span>
            <span data-lang="en">Estimated budget</span>
          </label>
          <select className="select" name="budget" required>
            <option value="">—</option>
            {budgets.map((budget) => <option key={budget}>{budget}</option>)}
          </select>
        </div>
      </div>

      <div className="field">
        <label>
          <span data-lang="ar">رسالة إضافية</span>
          <span data-lang="en">Additional message</span>
        </label>
        <textarea className="textarea" name="message" />
      </div>

      <button className="btn btn-primary" type="submit">
        <span data-lang="ar">إرسال الطلب</span>
        <span data-lang="en">Send request</span>
      </button>

      <p className="notice">
        <span data-lang="ar">بعد الإرسال ستظهر صفحة تأكيد داخل الموقع. لتقليل رسائل التفعيل المتكررة، استخدم رابط FormSubmit المخفي بعد أول تفعيل.</span>
        <span data-lang="en">After submission, a confirmation page will appear. To reduce repeated activation emails, use the hidden FormSubmit endpoint after first activation.</span>
      </p>
    </form>
  );
}