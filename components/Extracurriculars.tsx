import Image from "next/image";

const extracurriculars = [
  {
    logo: "/codejam.png",
    alt: "CodeJam McGill University",
    title: "CodeJam McGill University",
    role: "President",
    bullets: [
      "Spearheaded the annual CodeJam Hackathon, demonstrating leadership in organizing a premier coding event hosting over 400 participants and sponsors.",
      "Led a 20-person team to manage all event aspects, including Sponsorship, Finance, Web Dev, Logistics, Marketing, and Participant selection.",
      "Built and maintained strong partnerships with students, sponsors and industry leaders to support and create a valuable networking experience.",
    ],
  },
  {
    logo: "/mcwics.png",
    alt: "McGill Women in Computer Science",
    title: "McGill Women in Computer Science",
    role: "VP External",
    bullets: [
      "Serving as the liaison between McWICS and other McGill clubs, representing McWICS at Industry events, and coordinating joint events to foster inter-club collaborations and industry partnerships.",
      "McGill Representative for the Pan-Canada WICS events and initiatives.",
    ],
  },
  {
    logo: "/ghc.jpg",
    alt: "Gordie Howe Cares Pro-Am",
    title: "Gordie Howe Cares Pro-Am",
    role: "Volunteer",
    bullets: [
      "Supported the Event Coordinator in the lead-up to the NHL Alumni Pro-Am tournament weekend—staging materials, moving equipment, and preparing spaces for teams and guests.",
      "Optimized Draft Night flow by assisting check-in and jersey distribution and maintaining the live draft order.",
    ],
  },
];

export default function Extracurriculars() {
  return (
    <section id="extracurriculars" className="bg-gray-50">
      {/* Green divider */}
      <section className="bg-gray-50 w-full">
        <hr className="w-full h-[2px] bg-emerald-500 border-0 rounded-full" />
      </section>

      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 mb-12">
          <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
            Extracurriculars
          </span>
          <p className="text-center text-gray-600 text-sm md:text-base leading-6 md:leading-7 max-w-2xl mx-auto">
            Selected extracurricular leadership roles and volunteering:
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[48px] w-full">
          {extracurriculars.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-[48px] gap-[24px] rounded-xl bg-white shadow-md min-h-[480px] h-full"
            >
              {/* Logo */}
              <Image
                src={item.logo}
                alt={item.alt}
                width={64}
                height={64}
                className="rounded-full"
              />

              {/* Title + Role */}
              <div className="flex flex-col items-center gap-[24px]">
                <h3 className="text-gray-900 font-semibold text-lg text-center">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.role}</p>
              </div>

              {/* Bullets */}
              <ul className="text-gray-600 text-sm flex flex-col gap-2 text-left w-full flex-grow">
                {item.bullets.map((b, i) => (
                  <li key={i} className="list-disc ml-5">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
