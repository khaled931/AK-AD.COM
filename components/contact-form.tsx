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
      <input type="hidden" name="_next" value="https://ak-ad.com/contact?sent=true" />
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
        <span data-lang="ar">عند أول إرسال قد تظهر صفحة تحقق أو تصل رسالة تأكيد إلى contact@ak-ad.com لتفعيل استقبال الطلبات.</span>
        <span data-lang="en">On the first submission, a verification page may appear or a confirmation email may be sent to contact@ak-ad.com.</span>
      </p>
    </form>
  );
}