import type { Metadata } from "next";
import aboutData from "@/content/about.json";

export const metadata: Metadata = {
  title: aboutData.meta.title,
  description: aboutData.meta.description,
};

export default function AboutPage() {
  const { hero, mission, approach, values } = aboutData;

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

      {/* Mission */}
      <section className="bg-[#F3F3FF] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white text-[#100CC9] border border-[#E2E2F0] mb-4">
              {mission.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-6">
              {mission.headline}
            </h2>
            <p className="text-lg text-[#4A4A5A] leading-relaxed border-l-4 border-[#100CC9] pl-6">
              {mission.body}
            </p>
          </div>
        </div>
      </section>

      {/* Scientific Approach */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#F3F3FF] text-[#100CC9] border border-[#E2E2F0] mb-4">
              {approach.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              {approach.headline}
            </h2>
            <p className="text-[#4A4A5A] leading-relaxed">{approach.body}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {approach.points.map((point, i) => (
              <div
                key={point.title}
                className="bg-white rounded-2xl p-6 border border-[#E2E2F0] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#100CC9] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A2E] mb-2">{point.title}</h3>
                    <p className="text-sm text-[#4A4A5A] leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F3F3FF] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white text-[#100CC9] border border-[#E2E2F0] mb-4">
              {values.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E]">
              {values.headline}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.items.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-[#E2E2F0] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="font-bold text-[#1A1A2E] mb-2">{item.title}</h3>
                <p className="text-sm text-[#4A4A5A] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
