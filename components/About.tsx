// app/components/About.tsx
"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-gray-50">
      <div className="mx-auto max-w-[1440px] px-5 md:px-20 pt-24 pb-6">
        {/* FULL-WIDTH, CENTERED PILL */}
        <div className="w-full flex justify-center mb-6">
          <span
            className="inline-flex items-center justify-center
                   px-5 py-1 rounded-[12px]
                   bg-gray-200 text-emerald-500 text-xs font-medium"
          >
            About me
          </span>
        </div>

        {/* TWO COLUMNS */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-16">
          {/* LEFT: stacked photo */}
          <div
            className="relative w-[320px] h-[360px] shrink-0"
            style={{ filter: "drop-shadow(0 4px 4px rgba(0,0,0,0.25))" }}
          >
            {/* back block (grey) */}
            <div className="absolute -left-6 top-12 w-[280px] h-[300px] border-[8px] border-white bg-gray-200" />
            {/* front photo */}
            <div className="absolute left-0 top-0 w-[280px] h-[320px] border-[8px] border-white overflow-hidden">
              <Image
                src="/vball.jpg"
                alt="Volleyball action"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT: text column */}
          <div className="max-w-[640px] w-full">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              A little bit about me:
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                I’m a McGill senior double-majoring in Mathematical Statistics
                and Software Engineering with a minor in Economics.
              </p>

              <p>
                I build data-driven sports analytics tools and the back-end
                systems that power them. My current work focuses on developing
                player-evaluation models that combine on-ice impact with
                positive media momentum to highlight players who perform and
                trend positively. My goal across all my projects is simple:
                transparent methods, defensible assumptions, and actionable
                takeaways for front offices and leadership. Sports have become a
                large part of my identity.
              </p>

              <p>
                Sports have become a large part of my identity. Beyond following
                hockey/football/golf, I dig into CBA/cap mechanics and build
                tools people use—right now a fantasy football lineup optimizer
                that maximizes weekly expected points under roster constraints
                (projections, positional scarcity, bye weeks, risk).
              </p>

              <p>
                I have experience working across the full SDLC: scoping → design
                → TypeScript/Python implementation → testing → CI/CD on Azure
                DevOps with SonarCloud quality gates → post-release monitoring.
                I’ve standardized TypeScript-first repos, automated developer
                tasks with Bash/PowerShell, instrumented apps with structured
                metrics, and written runbooks—cutting new-dev setup from ~8
                hours to ~25 minutes. I’ve also evaluated and rolled out GitHub
                Copilot with team guidelines to speed up safe, repeatable
                environments.
              </p>

              <div>
                <p className="font-medium mb-1">Where I excel:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Bridging front offices/management and data & engineering
                    teams with clear, audience-appropriate communication.
                  </li>
                  <li>
                    Pairing econometrics with production software so models
                    become products with clean interfaces, reliable pipelines,
                    and measurable impact.
                  </li>
                  <li>
                    Building reproducible analytics and documentation so work
                    can be trusted, reused, and shipped
                  </li>
                </ul>
              </div>

              <p>
                I’m seeking roles in data science/analytics or software
                engineering with sports, finance, or research-driven teams—where
                rigorous analysis meets product constraints and real decisions.
                If that’s your world, I’d love to connect.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
