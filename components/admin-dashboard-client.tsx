"use client";

import { useEffect, useState } from "react";
import type { CmsPage, CmsPost, CmsState } from "@/lib/cms";

type Message = {
  id: string;
  name: string;
  company: string;
  phone: string;
  email: string;
  service: string;
  budget: string;
  message?: string;
  createdAt: string;
};

type TestResult = {
  id: string;
  score: number;
  resultAr: string;
  resultEn: string;
  createdAt: string;
};

type Tab = "overview" | "messages" | "tests" | "posts" | "pages" | "info";

function Field({ label, value, onChange, textarea = false }: { label: string; value: string; onChange: (value: string) => void; textarea?: boolean }) {
  return (
    <div className="field">
      <label>{label}</label>
      {textarea ? (
        <textarea className="textarea" value={value} onChange={(event) => onChange(event.target.value)} />
      ) : (
        <input className="input" value={value} onChange={(event) => onChange(event.target.value)} />
      )}
    </div>
  );
}

export function AdminDashboardClient() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [results, setResults] = useState<TestResult[]>([]);
  const [cms, setCms] = useState<CmsState | null>(null);
  const [needsLogin, setNeedsLogin] = useState(false);
  const [status, setStatus] = useState("Loading...");
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  async function loadData() {
    setStatus("Loading...");
    const [messagesResponse, resultsResponse, cmsResponse] = await Promise.all([
      fetch("/api/admin/messages"),
      fetch("/api/admin/test-results"),
      fetch("/api/admin/cms")
    ]);

    if (!messagesResponse.ok || !resultsResponse.ok || !cmsResponse.ok) {
      setNeedsLogin(true);
      return;
    }

    const messagesJson = await messagesResponse.json();
    const resultsJson = await resultsResponse.json();
    const cmsJson = await cmsResponse.json();

    setMessages(messagesJson.messages || []);
    setResults(resultsJson.results || []);
    setCms(cmsJson.cms || null);
    setStatus("Ready");
  }

  useEffect(() => {
    loadData();
  }, []);

  async function saveCms(nextCms = cms) {
    if (!nextCms) return;
    setStatus("Saving...");
    const response = await fetch("/api/admin/cms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "saveCms", cms: nextCms })
    });

    if (!response.ok) {
      setStatus("Save failed");
      return;
    }

    const json = await response.json();
    setCms(json.cms);
    setStatus("Saved");
  }

  async function createPost() {
    setStatus("Creating post...");
    const response = await fetch("/api/admin/cms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "createPost" })
    });

    if (!response.ok) {
      setStatus("Create failed");
      return;
    }

    const json = await response.json();
    setCms(json.cms);
    setActiveTab("posts");
    setStatus("Post created");
  }

  async function deletePost(id: string) {
    setStatus("Deleting post...");
    const response = await fetch("/api/admin/cms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "deletePost", id })
    });

    if (!response.ok) {
      setStatus("Delete failed");
      return;
    }

    const json = await response.json();
    setCms(json.cms);
    setStatus("Post deleted");
  }

  function updatePost(id: string, patch: Partial<CmsPost>) {
    if (!cms) return;
    setCms({
      ...cms,
      posts: cms.posts.map((post) => post.id === id ? { ...post, ...patch, updatedAt: new Date().toISOString() } : post)
    });
  }

  function updatePage(id: CmsPage["id"], patch: Partial<CmsPage>) {
    if (!cms) return;
    setCms({
      ...cms,
      pages: cms.pages.map((page) => page.id === id ? { ...page, ...patch, updatedAt: new Date().toISOString() } : page)
    });
  }

  if (needsLogin) {
    return (
      <section className="admin-shell">
        <div className="container card">
          <h1>Admin access required</h1>
          <a className="btn btn-primary" href="/admin/login">Login</a>
        </div>
      </section>
    );
  }

  return (
    <section className="admin-shell">
      <div className="container">
        <p className="eyebrow">Admin Dashboard</p>
        <h1>AK-AD media dashboard</h1>
        <p className="muted">Status: {status}</p>

        <div className="grid grid-4" style={{ marginTop: 28 }}>
          <div className="card"><p className="muted">Messages</p><h2>{messages.length}</h2></div>
          <div className="card"><p className="muted">Digital tests</p><h2>{results.length}</h2></div>
          <div className="card"><p className="muted">Posts</p><h2>{cms?.posts.length || 0}</h2></div>
          <div className="card"><p className="muted">Managed pages</p><h2>{cms?.pages.length || 0}</h2></div>
        </div>

        <div className="card" style={{ marginTop: 28 }}>
          <div className="hero-actions" style={{ marginTop: 0 }}>
            {[
              ["overview", "Overview"],
              ["messages", "Messages"],
              ["tests", "Tests"],
              ["posts", "Posts"],
              ["pages", "Pages"],
              ["info", "Site info"]
            ].map(([tab, label]) => (
              <button className={`btn ${activeTab === tab ? "btn-primary" : "btn-secondary"}`} key={tab} onClick={() => setActiveTab(tab as Tab)} type="button">
                {label}
              </button>
            ))}
          </div>
        </div>

        {activeTab === "overview" && (
          <div className="card" style={{ marginTop: 28 }}>
            <h2>Content management overview</h2>
            <ul className="list">
              <li>Create and edit blog/news posts.</li>
              <li>Manage page titles and internal page descriptions.</li>
              <li>Manage official contact and social media information.</li>
              <li>CMS data is stored in Vercel KV when configured; otherwise it is only temporary memory storage.</li>
            </ul>
          </div>
        )}

        {activeTab === "messages" && (
          <div className="card" style={{ marginTop: 28 }}>
            <h2>Contact messages</h2>
            <div className="table-wrap">
              <table className="table">
                <thead><tr><th>Date</th><th>Name</th><th>Company</th><th>Service</th><th>Contact</th></tr></thead>
                <tbody>
                  {messages.map((message) => (
                    <tr key={message.id}>
                      <td>{new Date(message.createdAt).toLocaleString()}</td>
                      <td>{message.name}</td>
                      <td>{message.company}</td>
                      <td>{message.service}</td>
                      <td>{message.phone}<br />{message.email}</td>
                    </tr>
                  ))}
                  {!messages.length && <tr><td colSpan={5}>No messages yet.</td></tr>}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "tests" && (
          <div className="card" style={{ marginTop: 28 }}>
            <h2>Digital test results</h2>
            <div className="table-wrap">
              <table className="table">
                <thead><tr><th>Date</th><th>Score</th><th>Result</th></tr></thead>
                <tbody>
                  {results.map((result) => (
                    <tr key={result.id}>
                      <td>{new Date(result.createdAt).toLocaleString()}</td>
                      <td>{result.score}/10</td>
                      <td>{result.resultAr || result.resultEn}</td>
                    </tr>
                  ))}
                  {!results.length && <tr><td colSpan={3}>No test results yet.</td></tr>}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "posts" && cms && (
          <div className="grid" style={{ marginTop: 28 }}>
            <div className="card">
              <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
                <h2 style={{ margin: 0 }}>Posts</h2>
                <div className="hero-actions" style={{ marginTop: 0 }}>
                  <button className="btn btn-secondary" onClick={createPost} type="button">New post</button>
                  <button className="btn btn-primary" onClick={() => saveCms()} type="button">Save CMS</button>
                </div>
              </div>
            </div>

            {cms.posts.map((post) => (
              <article className="card" key={post.id}>
                <div className="grid grid-2">
                  <Field label="Arabic title" value={post.titleAr} onChange={(value) => updatePost(post.id, { titleAr: value })} />
                  <Field label="English title" value={post.titleEn} onChange={(value) => updatePost(post.id, { titleEn: value })} />
                  <Field label="Arabic excerpt" value={post.excerptAr} onChange={(value) => updatePost(post.id, { excerptAr: value })} textarea />
                  <Field label="English excerpt" value={post.excerptEn} onChange={(value) => updatePost(post.id, { excerptEn: value })} textarea />
                  <Field label="Arabic content" value={post.contentAr} onChange={(value) => updatePost(post.id, { contentAr: value })} textarea />
                  <Field label="English content" value={post.contentEn} onChange={(value) => updatePost(post.id, { contentEn: value })} textarea />
                </div>
                <div className="hero-actions">
                  <select className="select" value={post.status} onChange={(event) => updatePost(post.id, { status: event.target.value as CmsPost["status"] })} style={{ maxWidth: 220 }}>
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                  <a className="btn btn-secondary" href={`/blog/${post.id}`} target="_blank">Preview</a>
                  <button className="btn btn-secondary" onClick={() => deletePost(post.id)} type="button">Delete</button>
                </div>
              </article>
            ))}

            {!cms.posts.length && <div className="card">No posts yet. Click “New post”.</div>}
          </div>
        )}

        {activeTab === "pages" && cms && (
          <div className="grid" style={{ marginTop: 28 }}>
            <div className="card">
              <h2>Pages</h2>
              <p className="muted">Manage page labels and internal descriptions for editorial planning.</p>
              <button className="btn btn-primary" onClick={() => saveCms()} type="button">Save pages</button>
            </div>
            {cms.pages.map((page) => (
              <article className="card" key={page.id}>
                <span className="badge">/{page.id === "home" ? "" : page.id}</span>
                <div className="grid grid-2" style={{ marginTop: 18 }}>
                  <Field label="Arabic page title" value={page.titleAr} onChange={(value) => updatePage(page.id, { titleAr: value })} />
                  <Field label="English page title" value={page.titleEn} onChange={(value) => updatePage(page.id, { titleEn: value })} />
                  <Field label="Arabic description" value={page.descriptionAr} onChange={(value) => updatePage(page.id, { descriptionAr: value })} textarea />
                  <Field label="English description" value={page.descriptionEn} onChange={(value) => updatePage(page.id, { descriptionEn: value })} textarea />
                </div>
              </article>
            ))}
          </div>
        )}

        {activeTab === "info" && cms && (
          <div className="card" style={{ marginTop: 28 }}>
            <h2>Site information</h2>
            <div className="grid grid-2">
              <Field label="Company name" value={cms.siteInfo.companyName} onChange={(value) => setCms({ ...cms, siteInfo: { ...cms.siteInfo, companyName: value } })} />
              <Field label="Slogan" value={cms.siteInfo.slogan} onChange={(value) => setCms({ ...cms, siteInfo: { ...cms.siteInfo, slogan: value } })} />
              <Field label="Email" value={cms.siteInfo.email} onChange={(value) => setCms({ ...cms, siteInfo: { ...cms.siteInfo, email: value } })} />
              <Field label="WhatsApp link" value={cms.siteInfo.whatsapp} onChange={(value) => setCms({ ...cms, siteInfo: { ...cms.siteInfo, whatsapp: value } })} />
              <Field label="Facebook" value={cms.siteInfo.facebook} onChange={(value) => setCms({ ...cms, siteInfo: { ...cms.siteInfo, facebook: value } })} />
              <Field label="Instagram" value={cms.siteInfo.instagram} onChange={(value) => setCms({ ...cms, siteInfo: { ...cms.siteInfo, instagram: value } })} />
            </div>
            <button className="btn btn-primary" onClick={() => saveCms()} type="button" style={{ marginTop: 22 }}>Save site info</button>
          </div>
        )}
      </div>
    </section>
  );
}
