"use client";

import { fellSC } from "@/app/fonts";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="bg-white">
      <div
        className="mx-auto max-w-[1440px] min-h-[552px] px-20 py-24
                flex items-center justify-center gap-8 md:gap-10"
      >
        {/* LEFT: text */}
        <div className="max-w-[768px] flex-1">
          <h1
            className={`${fellSC.className} text-[44px] leading-[56px] tracking-tight mb-4`}
          >
            Sloane Stevenson Holtby,
          </h1>

          <p className="p text-[15px] md:text-[17px] leading-7 md:leading-8">
            McGill senior double-majoring in Mathematical Statistics and
            Software Engineering with a minor in Economics. Recently modeled how
            NHL roster structure under the salary cap relates to regular season
            wins, built on a 2015–2024 dataset and delivered as an interactive
            dashboard. On the engineering side, ships end-to-end systems and
            improves Developer Experience. USPORTS volleyball alumni, President
            of McGill Engineering's largest hackathon, and past VP of McGill
            Women in Computer Science.
          </p>

          <div className="mt-9 space-y-9">
            {/* location */}
            <div className="flex items-center gap-2">
              <img src="/icons/location.svg" alt="" className="h-5 w-5" />
              <span className="text-sm md:text-base text-gray-700">
                Calgary, Canada
              </span>
            </div>

            {/* open to relocation */}
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-sm md:text-base text-gray-700">
                Open to relocation
              </span>
            </div>

            {/* socials */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/sloholt"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/icons/github.svg" alt="GitHub" className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/sloane-holtby-58b76422a/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  className="h-6 w-6"
                />
              </a>
              <a href="mailto:sloaneholtby@gmail.com">
                <img src="/icons/mail.svg" alt="Email" className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: photo */}
        <div
          className="relative w-[310px] h-[350px] shrink-0 self-center ml-4 md:ml-6"
          style={{ filter: "drop-shadow(0 4px 4px rgba(0,0,0,0.25))" }}
        >
          {/* grey block */}
          <div className="absolute right-0 top-8 w-[280px] h-[320px] border-[8px] border-white bg-gray-200" />

          {/* photo block */}
          <div className="absolute left-0 top-0 w-[280px] h-[320px] border-[8px] border-white overflow-hidden">
            <Image
              src="/headshot.jpg"
              alt="Sloane portrait"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
