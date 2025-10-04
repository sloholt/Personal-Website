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
    <section id="skills" className="bg-gray-50">
      {/* Green divider */}
      <div className="w-full h-[2px] bg-emerald-500 mx-auto max-w-[1440px]" />

      <div className="section-container flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-6 mb-12">
          <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-sm font-medium">
            Skills
          </span>
          <p className="text-center text-gray-600 text-sm md:text-base leading-6 md:leading-7 max-w-2xl mx-auto">
            I have hands-on experience with the following technologies,
            frameworks, and tools:
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-7 gap-x-[119px] gap-y-[48px] justify-center mx-auto">
          {skills.map((s) => (
            <div key={s.name} className="flex flex-col items-center gap-4">
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

        {/* Mobile */}
        <div className="grid grid-cols-3 gap-x-6 gap-y-6 md:hidden">
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
