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

export function ContactForm() {
  return (
    <form
      action="https://formsubmit.co/contact@ak-ad.com"
      className="form card"
      method="POST"
    >
      <input type="hidden" name="_subject" value="طلب تواصل جديد من موقع AK-AD media" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://ak-ad.com/contact?sent=true" />
      <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      <div className="grid grid-2">
        <div className="field">
          <label>
            <span data-lang="ar">الاسم</span>
            <span data-lang="en">Name</span>
          </label>
          <input className="input" name="الاسم" required />
        </div>
        <div className="field">
          <label>
            <span data-lang="ar">اسم الشركة</span>
            <span data-lang="en">Company name</span>
          </label>
          <input className="input" name="اسم الشركة" required />
        </div>
      </div>

      <div className="grid grid-2">
        <div className="field">
          <label>
            <span data-lang="ar">رقم الهاتف</span>
            <span data-lang="en">Phone</span>
          </label>
          <input className="input" name="رقم الهاتف" required />
        </div>
        <div className="field">
          <label>
            <span data-lang="ar">البريد الإلكتروني</span>
            <span data-lang="en">Email</span>
          </label>
          <input className="input" name="البريد الإلكتروني" type="email" required />
        </div>
      </div>

      <div className="grid grid-2">
        <div className="field">
          <label>
            <span data-lang="ar">نوع الخدمة المطلوبة</span>
            <span data-lang="en">Requested service</span>
          </label>
          <select className="select" name="نوع الخدمة المطلوبة" required>
            <option value="">—</option>
            {services.map((service) => <option key={service}>{service}</option>)}
          </select>
        </div>
        <div className="field">
          <label>
            <span data-lang="ar">الميزانية التقريبية</span>
            <span data-lang="en">Estimated budget</span>
          </label>
          <select className="select" name="الميزانية التقريبية" required>
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
        <textarea className="textarea" name="رسالة إضافية" />
      </div>

      <button className="btn btn-primary" type="submit">
        <span data-lang="ar">إرسال الطلب</span>
        <span data-lang="en">Send request</span>
      </button>

      <p className="notice">
        <span data-lang="ar">سيتم إرسال الطلب مباشرة إلى contact@ak-ad.com. عند أول استخدام قد تصل رسالة تأكيد إلى بريد الشركة لتفعيل استقبال الطلبات.</span>
        <span data-lang="en">The request will be sent directly to contact@ak-ad.com. On first use, a confirmation email may be sent to activate submissions.</span>
      </p>
    </form>
  );
}