"use client";

import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="section-container text-center">
        {/* Pill badge */}
        <span className="inline-flex items-center justify-center px-5 py-1 rounded-[12px] bg-emerald-500 text-white text-sm font-medium">
          Get in touch
        </span>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm md:text-base mt-[29px]">
          References available upon request
        </p>

        {/* Email */}
        <div className="mt-[29px] flex justify-center items-center gap-4">
          <a
            href="mailto:sloaneholtby@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4"
          >
            <Image
              src="/icons/mail.svg"
              alt="Email"
              width={22}
              height={22}
              className="h-[22px] w-[22px]"
            />
            <span className="text-xl font-semibold text-gray-900">
              sloaneholtby@gmail.com
            </span>
          </a>
        </div>

        {/* Phone */}
        <div className="mt-[16px] flex justify-center items-center gap-4">
          <Image
            src="/icons/phone.png"
            alt="Phone"
            width={22}
            height={22}
            className="h-[22px] w-[22px]"
          />
          <span className="text-lg font-semibold text-gray-900">
            +1 403 700 1486
          </span>
        </div>

        {/* Socials */}
        <p className="mt-[29px] text-sm text-gray-600">
          You may also find me on these platforms!
        </p>
        <div className="mt-[38px] flex justify-center gap-8">
          <a href="https://github.com/sloholt" target="_blank" rel="noreferrer">
            <Image
              src="/icons/github.svg"
              alt="GitHub"
              width={20}
              height={20}
              className="h-5 w-5"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/sloane-holtby-58b76422a/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              width={20}
              height={20}
              className="h-5 w-5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
