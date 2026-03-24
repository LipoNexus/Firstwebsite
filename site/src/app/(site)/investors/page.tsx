import type { Metadata } from "next";
import Link from "next/link";
import investorsData from "@/content/investors.json";

export const metadata: Metadata = {
  title: investorsData.meta.title,
  description: investorsData.meta.description,
};

export default function InvestorsPage() {
  const { hero, thesis, contact } = investorsData;

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

      {/* Investment Thesis */}
      <section className="bg-[#F3F3FF] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-12">
            {thesis.headline}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {thesis.points.map((point, i) => (
              <div
                key={point.title}
                className="bg-white rounded-2xl p-6 border border-[#E2E2F0] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-[#100CC9] text-white flex items-center justify-center text-sm font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold text-[#1A1A2E] mb-2">{point.title}</h3>
                <p className="text-sm text-[#4A4A5A] leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#100CC9] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {contact.headline}
          </h2>
          <p className="text-blue-200 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
            {contact.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-[#100CC9] font-medium hover:bg-[#F3F3FF] transition-colors duration-200"
            >
              Get in Touch
            </Link>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/40 text-white font-medium hover:bg-white/10 transition-colors duration-200"
            >
              {contact.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
