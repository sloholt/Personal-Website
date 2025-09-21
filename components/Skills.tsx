// app/components/Skills.tsx
"use client";

import Image from "next/image";

const skills = [
  // row 1
  { name: "Python", src: "/Python.jpg" },
  { name: "R", src: "/R.png" },
  { name: "Java", src: "/Java.png" },
  { name: "JavaScript", src: "/icon-javscript.svg" },
  { name: "TypeScript", src: "/TypeScript.png" },
  { name: "HTML", src: "/HTML5.jpg" },
  { name: "CSS", src: "/CSS3.jpg" },
  // row 2
  { name: "PostgreSQL", src: "/postgresql.jpg" },
  { name: "MongoDB", src: "/mongodb.jpg" },
  { name: "AWS", src: "/AWS.jpg" },
  { name: "Azure", src: "/Azure.jpg" },
  { name: "Figma", src: "/figma.jpg" },
  { name: "GitLab", src: "/Gitlab.jpg" },
  { name: "Git", src: "/git.jpg" },
];

const row1 = skills.slice(0, 7);
const row2 = skills.slice(7);

export default function Skills() {
  return (
    <section id="skills" className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 md:px-20 pt-24 pb-16">
        {/* Pill badge */}
        <div className="w-full flex justify-center mb-3">
          <span className="inline-flex items-center justify-center px-5 py-1 rounded-[12px] bg-emerald-500 text-white text-xs font-semibold">
            Skills
          </span>
        </div>

        {/* Sub-heading */}
        <p className="text-center text-gray-600 text-sm md:text-base leading-6 md:leading-7 max-w-2xl mx-auto">
          I have hands-on experience with the following technologies,
          frameworks, and tools:
        </p>

        {/* --- Desktop / tablet (tighter spacing) --- */}
        <div className="mt-8 hidden md:flex md:flex-col md:space-y-8">
          {/* Row 1 */}
          <div className="mx-auto w-full md:max-w-[1000px] lg:max-w-[1080px] xl:max-w-[1120px] 2xl:max-w-[1216px] flex justify-between">
            {row1.map((s) => (
              <div
                key={s.name}
                className="flex h-[160px] flex-col justify-center items-start gap-4"
              >
                <Image
                  src={s.src}
                  alt={s.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
                <span className="text-sm text-gray-600">{s.name}</span>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="mx-auto w-full md:max-w-[1000px] lg:max-w-[1080px] xl:max-w-[1120px] 2xl:max-w-[1216px] flex justify-between">
            {row2.map((s) => (
              <div
                key={s.name}
                className="flex h-[160px] flex-col justify-center items-start gap-4"
              >
                <Image
                  src={s.src}
                  alt={s.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
                <span className="text-sm text-gray-600">{s.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- Mobile fallback: a bit tighter too --- */}
        <div className="mt-8 grid grid-cols-3 gap-x-6 gap-y-6 md:hidden">
          {skills.map((s) => (
            <div key={s.name} className="flex flex-col items-center gap-2.5">
              <Image
                src={s.src}
                alt={s.name}
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="text-xs text-gray-600 text-center">
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
