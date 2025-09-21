// app/components/Experience.tsx
"use client";

import Image from "next/image";

type Exp = {
  companyLogo: string;
  companyAlt: string;
  title: string;
  dateRange: string;
  bullets: string[];
};

const experiences: Exp[] = [
  {
    companyLogo: "/logos/mcgill.png",
    companyAlt: "McGill University",
    title: "Summer Research Student",
    dateRange: "May–August 2025",
    bullets: [
      "Summer Researcher, McGill — Dept. of Mathematics & Statistics (Supervisor: Prof. Steele).",
      "Modeled the non-linear link between salary dispersion and NHL performance using Poisson GLM and dynamic-panel GMM.",
      "Built an interactive dashboard and a reproducible pipeline to explore team-year salary structures under the cap.",
      "Shipped a public dashboard and paper link.",
    ],
  },
  {
    companyLogo: "/logos/lodgelink.png",
    companyAlt: "LodgeLink",
    title: "Full-Stack Developer",
    dateRange: "May–August 2024",
    bullets: [
      "Specialized in Developer Experience (DevEx): productivity, workflow streamlining, outcome measurement.",
      "Researched/implemented tools like GitHub Copilot and SonarCloud to optimize workflow and code quality.",
      "Ran data-driven analysis to remove bottlenecks and improve system performance.",
      "Built/maintained front- and back-end systems using cloud platforms and DevOps tooling.",
      "Supported Senior Management; served as liaison between management and developer teams.",
    ],
  },
  {
    companyLogo: "/logos/calgarystampede.png",
    companyAlt: "Edgerystep Resort",
    title: "Suite Attendant",
    dateRange: "June–August 2023",
    bullets: [
      "Delivered executive-level guest service and coordinated suite setup and inventory.",
      "Handled client requests, ensured timely resolutions, and documented processes for hand-offs.",
      "Demonstrated strong organization and communication to support seamless event execution.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 md:px-20 py-24">
        {/* Pill */}
        <div className="w-full flex justify-center mb-3">
          <span className="inline-flex items-center justify-center px-5 py-1 rounded-[12px] bg-emerald-500 text-white text-xs font-semibold">
            Experience
          </span>
        </div>

        {/* Sub-heading */}
        <p className="text-center text-gray-600 text-sm md:text-base leading-6 md:leading-7 max-w-2xl mx-auto">
          Here is a quick summary of my most recent experiences:
        </p>

        {/* Cards */}
        <div className="mt-12 space-y-20">
          {experiences.map((e, i) => (
            <article
              key={i}
              className="
                mx-auto w-full md:max-w-[1120px]
                rounded-[12px] bg-white
                shadow-md
                flex gap-6 md:gap-8
                p-6 md:p-8
              "
              style={{
                // Figma spec: width 896, height 360, padding 32, radius 12, shadow
                // We let height be auto for responsiveness; the rest matches.
                boxShadow:
                  "0 4px 3px rgba(0,0,0,0.07), 0 2px 2px rgba(0,0,0,0.06)",
              }}
            >
              {/* Logo column */}
              <div className="flex-shrink-0 flex items-start md:items-center justify-center w-[72px] md:w-[96px]">
                <Image
                  src={e.companyLogo}
                  alt={e.companyAlt}
                  width={96}
                  height={48}
                  className="h-8 md:h-10 w-auto object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900">
                    {e.title}
                  </h3>
                  <span className="text-xs md:text-sm text-gray-500 whitespace-nowrap">
                    {e.dateRange}
                  </span>
                </div>

                <ul className="mt-3 list-disc pl-5 space-y-1.5 text-sm text-gray-700">
                  {e.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
