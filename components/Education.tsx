"use client";

export default function Education() {
  return (
    <section id="education" className="bg-white">
      <div className="section-container">
        {/* Pill badge */}
        <div className="w-full flex justify-center mb-3">
          <span className="inline-flex items-center justify-center px-5 py-1 rounded-[12px] bg-emerald-500 text-white text-xs font-semibold">
            Education
          </span>
        </div>

        {/* Sub-heading */}
        <p className="text-center text-gray-600 text-sm md:text-base leading-6 md:leading-7 max-w-2xl mx-auto">
          Academic background with selected, job-relevant coursework:
        </p>

        {/* 3-card grid */}
        <div className="mt-10 flex flex-col gap-10">
          {/* Card 1 */}
          <div className="w-full rounded-[12px] bg-white ring-1 ring-gray-200 shadow-[0_6px_24px_rgba(16,24,40,0.06)] p-8 md:p-12">
            <h3 className="text-gray-900 font-semibold text-lg leading-6">
              Major in Mathematical Statistics
            </h3>
            <div className="mt-3 text-gray-600 text-sm">
              <p>McGill University — B.A.</p>
              <p>September 2021 – May 2026</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Applied Regression",
                "Generalized Linear Models",
                "Probability",
                "Statistical Computing",
                "Statistical Inference & Methods",
                "Applied Multivariate Statistics",
                "Linear Algebra",
                "Multi-variable Calculus",
                "Mathematical Analysis",
                "Data Science Practicum",
              ].map((c) => (
                <span
                  key={c}
                  className="rounded-full bg-gray-200 text-gray-700 text-xs px-3 py-1"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full rounded-[12px] bg-white ring-1 ring-gray-200 shadow-[0_6px_24px_rgba(16,24,40,0.06)] p-8 md:p-12">
            <h3 className="text-gray-900 font-semibold text-lg leading-6">
              Major in Software Engineering
            </h3>
            <div className="mt-3 text-gray-600 text-sm">
              <p>McGill University — B.A</p>
              <p>September 2021 – May 2026</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Calculus",
                "Discrete Math",
                "Data Structures & Algorithms",
                "Programming Methodology",
                "Software Design",
                "Database Systems",
                "Computer Systems & Hardware",
                "Programming Languages & Paradigms",
                "Software Construction & OOP",
                "Natural Language Processing & Text Mining",
              ].map((c) => (
                <span
                  key={c}
                  className="rounded-full bg-gray-200 text-gray-700 text-xs px-3 py-1"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full rounded-[12px] bg-white ring-1 ring-gray-200 shadow-[0_6px_24px_rgba(16,24,40,0.06)] p-8 md:p-12">
            <h3 className="text-gray-900 font-semibold text-lg leading-6">
              Minor in Economics
            </h3>
            <div className="mt-3 text-gray-600 text-sm">
              <p>McGill University — B.A</p>
              <p>September 2021 – May 2026</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Macroeconomic Analysis",
                "Microeconomic Analysis",
                "Econometrics",
                "Underground Economies",
                "Financial Instruments & Institutions",
                "Economic Crises",
                "Economic Development",
              ].map((c) => (
                <span
                  key={c}
                  className="rounded-full bg-gray-200 text-gray-700 text-xs px-3 py-1"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
