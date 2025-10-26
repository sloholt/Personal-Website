"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-gray-50">
      <div className="section-container">
        {/* pill */}
        <div className="w-full flex justify-center mb-6">
          <span className="inline-flex items-center justify-center px-5 py-1 rounded-[12px] bg-gray-200 text-emerald-500 text-xs font-medium">
            About me
          </span>
        </div>

        {/* Floated image + flowing text */}
        <div className="max-w-[960px] mx-auto text-gray-700 leading-relaxed">
          {/* stacked photo (floats on md+) */}
          <div
            className="
              relative w-[320px] h-[360px]
              mx-auto mb-6
              md:float-left md:mr-10 md:mb-6
            "
            style={{ filter: "drop-shadow(0 4px 4px rgba(0,0,0,0.25))" }}
          >
            {/* grey block */}
            <div className="absolute -left-6 top-12 w-[280px] h-[300px] border-[8px] border-white bg-gray-200" />
            {/* front photo */}
            <div className="absolute left-0 top-0 w-[280px] h-[320px] border-[8px] border-white overflow-hidden">
              <Image
                src="/vball1.JPG"
                alt="Volleyball action"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 320px, 320px"
              />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            A little bit about me:
          </h2>

          {/* These paragraphs sit to the right of the image (2-column look) */}
          <p>
            My interest in sports analytics came naturally; affinity for sports
            and excellence in math. It started first as a multisport athlete,
            then through participating in fantasy leagues and bracket
            challenges. That curiosity for sports evolved into a technical
            focus: building tools that turn messy data into actionable insights.
          </p>

          <p className="mt-4">
            Recently, I built a 2015–2024 NHL roster-economics dataset by
            joining Spotrac contract data with team results, quantified
            inequality using the Gini coefficient, and modeled wins (ROW) with
            Poisson GLM/GMM. The project is available as an interactive
            dashboard with takeaways for roster design, and I’m currently
            refining the research for publishing review later this year.
          </p>

          <p className="mt-4">
            On the engineering side, I’ve worked across the full software
            development lifecycle: scoping, design, TypeScript/Python
            implementation, testing, CI/CD on Azure DevOps with SonarCloud
            gates, and post-release monitoring. I’ve standardized
            TypeScript-first repos, automated developer tasks with Bash,
            instrumented apps with structured metrics, and written runbooks that
            cut new-dev setup from ~8 hours to ~25 minutes. I also evaluated and
            rolled out GitHub Copilot with team guidelines to speed up safe,
            repeatable environments.
          </p>

          {/* This paragraph will naturally wrap under the floated image */}
          <p className="mt-4">
            I also serve as the President of CodeJam, McGill Engineering’s
            largest hackathon. I lead a large team to plan and execute every
            aspect of a weekend-long event that hosts hundreds of participants,
            mentors, and industry sponsors. From logistics and sponsorships to
            technical infrastructure and team coordination, this role has
            sharpened my leadership, communication, and execution skills. It
            sets me apart as someone who not only builds real-world applicable
            systems, but also builds teams, drives initiatives, and delivers
            under pressure.
          </p>

          {/* Everything below should be full-width; clear the float */}
          <div className="md:clear-left mt-6">
            <p className="font-medium mb-1">Where I excel:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Bridging technical and non-technical teams with clear,
                audience-appropriate communication.
              </li>
              <li>
                Pairing econometrics with production software to turn models
                into products with clean interfaces and reliable pipelines.
              </li>
              <li>
                Building reproducible analytics and documentation across the
                full data science lifecycle so work can be trusted, reused, and
                shipped.
              </li>
            </ul>
          </div>

          <p className="md:clear-left mt-4">
            I am seeking roles in data science, analytics or software
            engineering, especially where rigorous analysis meets product
            constraints and real-world decisions.
          </p>
        </div>
      </div>
    </section>
  );
}
