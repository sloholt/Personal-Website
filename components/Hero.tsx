"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="bg-white">
      <div
        className="mx-auto max-w-[1440px] min-h-[552px] px-20 py-24
                      flex items-center justify-between gap-12"
      >
        {/* LEFT: text */}
        <div className="w-[652px]">
          <h1 className="text-[56px] leading-[64px] font-semibold tracking-tight mb-8">
            Hi, I’m Sloane
          </h1>

          <p className="p">
            I’m a McGill senior double-majoring in Mathematical Statistics and
            Software Engineering with a minor in Economics. Recently I modeled
            how NHL roster structure under the salary cap relates to regular
            season wins, built on a 2015–2024 dataset and delivered as an
            interactive dashboard. On the engineering, side I ship end-to-end
            systems and improve Developer Experience. I’m a USPORTS volleyball
            alumni, active in a variety of sports with a passion for events
            correlating to major sports.
          </p>

          {/* meta rows */}
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

            {/* socials (row width follows the 652px column) */}
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

        {/* RIGHT: photo with layered cards */}
        <div
          className="relative w-[310px] h-[350px]"
          style={{ filter: "drop-shadow(0 4px 4px rgba(0,0,0,0.25))" }}
        >
          {/* back block (grey) */}
          <div className="absolute right-0 top-8 w-[280px] h-[320px] border-[8px] border-white bg-gray-200" />

          {/* front block (photo) */}
          <div className="absolute left-0 top-0 w-[280px] h-[320px] border-[8px] border-white overflow-hidden">
            <Image
              src="/headshot.jpg" // make sure this is in /public
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
