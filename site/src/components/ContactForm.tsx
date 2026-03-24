"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Since this is a static site, open mailto as fallback
    const mailto = `mailto:partnering@liponexus.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
      `Name: ${form.name}\nOrganization: ${form.organization}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = mailto;
    setStatus("success");
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-[#E2E2F0] text-[#1A1A2E] text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#100CC9]/30 focus:border-[#100CC9] transition-all duration-200";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-[#4A4A5A] mb-1.5">
            Full Name <span className="text-[#100CC9]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-[#4A4A5A] mb-1.5">
            Email Address <span className="text-[#100CC9]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="organization" className="block text-xs font-medium text-[#4A4A5A] mb-1.5">
          Organization
        </label>
        <input
          id="organization"
          name="organization"
          type="text"
          value={form.organization}
          onChange={handleChange}
          placeholder="Your company or institution"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-xs font-medium text-[#4A4A5A] mb-1.5">
          Subject <span className="text-[#100CC9]">*</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          value={form.subject}
          onChange={handleChange}
          placeholder="How can we help?"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-medium text-[#4A4A5A] mb-1.5">
          Message <span className="text-[#100CC9]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your interest in LipoNexus..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-3.5 rounded-full bg-[#100CC9] text-white font-medium hover:bg-[#2A28F8] disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200 text-sm"
      >
        {status === "sending" ? "Opening mail client…" : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-sm text-green-600 text-center">
          Your email client should have opened. If not, email us directly at{" "}
          <a href="mailto:partnering@liponexus.com" className="underline">
            partnering@liponexus.com
          </a>
        </p>
      )}
    </form>
  );
}
