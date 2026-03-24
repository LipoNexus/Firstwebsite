import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import contactData from "@/content/contact.json";
import siteData from "@/content/site.json";

export const metadata: Metadata = {
  title: contactData.meta.title,
  description: contactData.meta.description,
};

export default function ContactPage() {
  const { hero, info } = contactData;

  return (
    <>
      {/* Hero */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#F3F3FF] text-[#100CC9] border border-[#E2E2F0] mb-6">
            {hero.badge}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-6 max-w-3xl">
            {hero.headline}
          </h1>
          <p className="text-lg text-[#4A4A5A] leading-relaxed max-w-2xl">
            {hero.body}
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="bg-[#F3F3FF] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-[#1A1A2E] mb-4">Contact Info</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white border border-[#E2E2F0] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#100CC9]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-[#4A4A5A] mb-0.5">Email</p>
                      <a
                        href={`mailto:${info.email}`}
                        className="text-sm text-[#100CC9] hover:text-[#2A28F8] font-medium transition-colors"
                      >
                        {info.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white border border-[#E2E2F0] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#100CC9]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-[#4A4A5A] mb-0.5">Location</p>
                      <p className="text-sm text-[#1A1A2E] font-medium">{info.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white border border-[#E2E2F0] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#100CC9]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-[#4A4A5A] mb-0.5">LinkedIn</p>
                      <a
                        href={siteData.company.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#100CC9] hover:text-[#2A28F8] font-medium transition-colors"
                      >
                        LipoNexus
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 border border-[#E2E2F0] shadow-sm">
                <h2 className="text-xl font-bold text-[#1A1A2E] mb-6">
                  {contactData.form.headline}
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
