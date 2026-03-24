import type { Metadata } from "next";
import privacyData from "@/content/privacy.json";

export const metadata: Metadata = {
  title: privacyData.meta.title,
  description: privacyData.meta.description,
};

export default function PrivacyPage() {
  const { hero, sections } = privacyData;

  return (
    <section className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-3">
          {hero.headline}
        </h1>
        <p className="text-sm text-[#4A4A5A] mb-12">
          Last updated: {hero.lastUpdated}
        </p>

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-bold text-[#1A1A2E] mb-3">
                {section.title}
              </h2>
              <div className="text-[#4A4A5A] leading-relaxed text-sm whitespace-pre-line">
                {section.body.split("\n").map((line, i) => {
                  if (line.startsWith("**") && line.endsWith("**")) {
                    return (
                      <p key={i} className="font-semibold text-[#1A1A2E] mt-3 mb-1">
                        {line.replace(/\*\*/g, "")}
                      </p>
                    );
                  }
                  if (line.startsWith("- ")) {
                    return (
                      <li key={i} className="list-disc list-inside ml-2">
                        {line.slice(2)}
                      </li>
                    );
                  }
                  if (line === "") return <br key={i} />;
                  return <p key={i}>{line}</p>;
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
