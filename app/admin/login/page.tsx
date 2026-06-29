"use client";

import { FormEvent, useState } from "react";

export default function AdminLoginPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const formData = new FormData(event.currentTarget);

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password")
      })
    });

    if (response.ok) {
      window.location.href = "/admin/dashboard";
      return;
    }

    setStatus("error");
  }

  return (
    <section className="admin-shell">
      <div className="container" style={{ maxWidth: 520 }}>
        <div className="card">
          <p className="eyebrow">Admin</p>
          <h1 style={{ fontSize: "2.2rem" }}><span data-lang="ar">تسجيل دخول الأدمن</span><span data-lang="en">Admin login</span></h1>
          <form className="form" onSubmit={onSubmit}>
            <div className="field"><label>Email</label><input className="input" name="email" type="email" defaultValue="admin@ak-ad.com" required /></div>
            <div className="field"><label>Password</label><input className="input" name="password" type="password" required /></div>
            <button className="btn btn-primary" disabled={status === "loading"} type="submit"><span data-lang="ar">دخول</span><span data-lang="en">Login</span></button>
            {status === "error" && <p className="notice"><span data-lang="ar">تعذر تسجيل الدخول. تأكد من كلمة المرور ومتغيرات البيئة.</span><span data-lang="en">Login failed. Check the password and environment variables.</span></p>}
          </form>
        </div>
      </div>
    </section>
  );
}