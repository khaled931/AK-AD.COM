"use client";

import { useEffect, useState } from "react";

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

export default function AdminDashboardPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [results, setResults] = useState<TestResult[]>([]);
  const [needsLogin, setNeedsLogin] = useState(false);

  useEffect(() => {
    async function loadData() {
      const messagesResponse = await fetch("/api/admin/messages");
      const resultsResponse = await fetch("/api/admin/test-results");

      if (!messagesResponse.ok || !resultsResponse.ok) {
        setNeedsLogin(true);
        return;
      }

      const messagesJson = await messagesResponse.json();
      const resultsJson = await resultsResponse.json();
      setMessages(messagesJson.messages || []);
      setResults(resultsJson.results || []);
    }

    loadData();
  }, []);

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

        <div className="grid grid-4" style={{ marginTop: 28 }}>
          <div className="card"><p className="muted">Messages</p><h2>{messages.length}</h2></div>
          <div className="card"><p className="muted">Digital tests</p><h2>{results.length}</h2></div>
          <div className="card"><p className="muted">Services</p><h2>10</h2></div>
          <div className="card"><p className="muted">Packages</p><h2>3</h2></div>
        </div>

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
      </div>
    </section>
  );
}