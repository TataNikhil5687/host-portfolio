"use client";

import { portfolioData } from "@/data/portfolio";
import { AlertCircle, Loader2, MailCheck } from "lucide-react";
import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: ""
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const web3FormsKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      if (!web3FormsKey) throw new Error("Missing Web3Forms access key");

      const payload = {
        access_key: web3FormsKey,
        subject: "New Portfolio Contact Message",
        from_name: form.name,
        email: form.email,
        message: form.message
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.message || "Submission failed");

      setStatus("success");
      setFeedback("Message sent successfully. I’ll get back to you shortly.");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="section-wrap py-16 pb-24">
      <h2 className="section-title">Let’s Build Something Impactful</h2>
      <p className="section-subtitle">
        Open to ServiceNow development, full-stack web roles, and enterprise automation opportunities.
      </p>

      <div className="mt-8 grid lg:grid-cols-2 gap-6">
        <div className="card-surface p-6">
          <h3 className="text-lg font-semibold">Direct Contact</h3>
          <div className="mt-4 space-y-2 text-zinc-300">
            <p>Email: {portfolioData.contact.email}</p>
            <p>Location: {portfolioData.contact.location}</p>
            <p>
              GitHub:{" "}
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noreferrer"
                className="text-emerald-400 hover:underline"
              >
                {portfolioData.contact.githubHandle}
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-emerald-400 hover:underline"
              >
                linkedin.com
              </a>
            </p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="card-surface p-6 space-y-4">
          <input
            type="text"
            required
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400/40"
          />
          <input
            type="email"
            required
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400/40"
          />
          <textarea
            required
            rows={5}
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
            className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400/40"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 disabled:opacity-70 text-white transition-colors"
          >
            {status === "loading" && <Loader2 className="animate-spin" size={16} />}
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-sm text-emerald-400 inline-flex items-center gap-2">
              <MailCheck size={16} /> {feedback}
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400 inline-flex items-center gap-2">
              <AlertCircle size={16} /> {feedback}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
