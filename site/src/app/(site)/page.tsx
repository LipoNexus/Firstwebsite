import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import homeData from "@/content/home.json";
import teamData from "@/content/team.json";
import siteData from "@/content/site.json";

export const metadata: Metadata = {
  title: homeData.meta.title,
  description: homeData.meta.description,
};

const icons: Record<string, React.ReactNode> = {
  droplet: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8 7 5 11 5 14a7 7 0 0014 0c0-3-3-7-7-12z" />
    </svg>
  ),
  microscope: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3h6M9 3v4m6-4v4M9 7h6M5 21h14M9 7l-2 14M15 7l2 14M12 7v8" />
    </svg>
  ),
  clock: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="9" strokeWidth={2} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 7v5l3 3" />
    </svg>
  ),
  chart: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
};

export default function HomePage() {
  const { hero, problem, solution, team, cta } = homeData;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#F3F3FF_0%,_transparent_60%)] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 pt-8 pb-10 md:pt-10 md:pb-12">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="flex-1 max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#1A1A2E] mb-6">
                {hero.headline}
              </h1>
              <div className="text-lg text-[#4A4A5A] leading-relaxed mb-8 max-w-2xl space-y-3">
                <p><strong className="text-[#1A1A2E]">{(hero as { subheadlineStrong?: string }).subheadlineStrong}</strong></p>
                <p>{hero.subheadline}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link
                  href={hero.cta.href}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#100CC9] text-white font-medium hover:bg-[#2A28F8] transition-colors duration-200 shadow-lg shadow-blue-900/20"
                >
                  {hero.cta.label}
                </Link>
                <Link
                  href={hero.secondaryCta.href}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-[#E2E2F0] text-[#1A1A2E] font-medium hover:border-[#100CC9] hover:text-[#100CC9] transition-colors duration-200"
                >
                  {hero.secondaryCta.label}
                </Link>
              </div>
              <div className="flex flex-row gap-4 mb-8 flex-wrap">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#F3F3FF] text-[#100CC9] border border-[#E2E2F0] whitespace-nowrap">
                  {hero.badge}
                </span>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#F3F3FF] text-[#100CC9] border border-[#E2E2F0] whitespace-nowrap">
                  For Concierge, Clinical Medicine, and Therapy Providers
                </span>
              </div>
            </div>
            <div className="flex-shrink-0 flex justify-center">
              <iframe
                src="/images/liver_slider_v18.html"
                title="Liver Health Visualizer"
                width="480"
                height="660"
                className="w-72 lg:w-[480px] rounded-2xl border-0"
                style={{ height: "660px" }}
                scrolling="no"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Affiliation Marquee */}
      <section className="bg-white border-t border-b border-[#E2E2F0] py-4 overflow-hidden">
        <div className="flex items-center animate-marquee" style={{width: "max-content"}}>
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center gap-x-12 px-12">
              <div className="flex items-center gap-x-2 opacity-70 hover:opacity-100 transition-opacity">
                <Image src="/images/affiliation org logos/UC San Diego.png" alt="UC San Diego" width={120} height={56} className="h-14 w-auto object-contain" />
                <span className="text-sm font-semibold text-[#4A4A5A] whitespace-nowrap">UC San Diego</span>
              </div>
              <div className="flex items-center gap-x-2 opacity-70 hover:opacity-100 transition-opacity">
                <Image src="/images/affiliation org logos/VCU.png" alt="VCU" width={80} height={56} className="h-14 w-auto object-contain" />
                <span className="text-sm font-semibold text-[#4A4A5A] whitespace-nowrap">VCU</span>
              </div>
              <Image src="/images/affiliation org logos/Journal of Lipid Research logo.png" alt="Journal of Lipid Research" width={160} height={52} className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" />
              <Image src="/images/affiliation org logos/Hepatology logo.png" alt="Hepatology" width={160} height={52} className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" />
              <Image src="/images/affiliation org logos/nejm logo.webp" alt="New England Journal of Medicine" width={160} height={52} className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section className="bg-[#F3F3FF] pt-12 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white text-[#100CC9] border border-[#E2E2F0] mb-4">
              {problem.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              {problem.headline}
            </h2>
            <p className="text-[#4A4A5A] leading-relaxed">{problem.body}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {problem.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-6 border border-[#E2E2F0] shadow-sm text-center"
              >
                <div className="text-3xl font-bold text-[#100CC9] font-[var(--font-mono)] mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-[#4A4A5A] leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#F3F3FF] text-[#100CC9] border border-[#E2E2F0] mb-4">
              {solution.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              {solution.headline}
            </h2>
            <p className="text-[#4A4A5A] leading-relaxed">{solution.body}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solution.features.map((feature) => (
              <div
                key={feature.title}
                className="group bg-white rounded-2xl p-6 border border-[#E2E2F0] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F3F3FF] text-[#100CC9] flex items-center justify-center mb-4">
                  {icons[feature.icon]}
                </div>
                <h3 className="font-bold text-[#1A1A2E] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#4A4A5A] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Preview */}
      <section className="bg-[#F3F3FF] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              {team.headline}
            </h2>
            <p className="text-[#4A4A5A] max-w-xl mx-auto">{team.subheadline}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamData.leadership.members.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-6 border border-[#E2E2F0] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center"
              >
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#E2E2F0] mx-auto mb-4"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-[#F3F3FF] border-2 border-[#E2E2F0] mx-auto mb-4 flex items-center justify-center text-[#100CC9] font-bold text-xl">
                    {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                )}
                <h3 className="font-bold text-[#1A1A2E] text-sm">{member.name}</h3>
                <p className="text-xs text-[#100CC9] mt-1">{member.title}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href={team.cta.href}
              className="inline-flex items-center gap-2 text-[#100CC9] font-medium hover:text-[#2A28F8] transition-colors duration-200"
            >
              {team.cta.label}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#100CC9] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {cta.headline}
          </h2>
          <p className="text-blue-200 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
            {cta.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={cta.primaryCta.href}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-[#100CC9] font-medium hover:bg-[#F3F3FF] transition-colors duration-200"
            >
              {cta.primaryCta.label}
            </Link>
            <Link
              href={cta.secondaryCta.href}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/40 text-white font-medium hover:bg-white/10 transition-colors duration-200"
            >
              {cta.secondaryCta.label}
            </Link>
          </div>
          <p className="mt-6 text-sm text-blue-200">
            <a
              href={`mailto:${siteData.company.email}`}
              className="underline underline-offset-2 hover:text-white transition-colors"
            >
              {siteData.company.email}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
