import type { Metadata } from "next";
import teamData from "@/content/team.json";

export const metadata: Metadata = {
  title: teamData.meta.title,
  description: teamData.meta.description,
};

export default function TeamPage() {
  const { hero, leadership, advisors } = teamData;

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

      {/* Leadership */}
      <section className="bg-[#F3F3FF] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1A1A2E] mb-12">
            {leadership.headline}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.members.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-8 border border-[#E2E2F0] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div
                    className="w-16 h-16 rounded-full bg-[#F3F3FF] border-2 border-[#E2E2F0] flex items-center justify-center text-[#100CC9] font-bold text-lg flex-shrink-0"
                    aria-hidden="true"
                  >
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-[#1A1A2E] text-lg">{member.name}</h3>
                    <p className="text-sm text-[#100CC9] font-medium mt-0.5">
                      {member.title}
                    </p>
                    <p className="text-sm text-[#4A4A5A] leading-relaxed mt-3">
                      {member.bio}
                    </p>
                    {member.linkedin && member.linkedin !== "#" && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-4 text-xs text-[#100CC9] hover:text-[#2A28F8] transition-colors"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Advisory Board */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1A1A2E] mb-12">
            {advisors.headline}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advisors.members.map((advisor) => (
              <div
                key={advisor.name}
                className="bg-[#F3F3FF] rounded-2xl p-6 border border-[#E2E2F0] hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="font-bold text-[#1A1A2E] mb-1">{advisor.name}</h3>
                <p className="text-xs text-[#100CC9] font-medium mb-3">
                  {advisor.title}
                </p>
                <p className="text-sm text-[#4A4A5A] leading-relaxed">
                  {advisor.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
