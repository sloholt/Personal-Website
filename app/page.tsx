import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCard from "@/components/ContactCard";
import Hero from "@/components/Hero"; // ← add this
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main>
      <Header />

      {/* HERO (component) */}
      <Hero />

      {/* ABOUT */}
      <About />

      {/* EDUCATION */}
      <Education />
      {/* Green divider */}
      <hr className="mx-auto max-w-[1440px] h-[2px] bg-emerald-500 border-0 rounded-full my-10" />

      {/* SKILLS */}
      <Skills />

      {/* EXPERIENCE */}
      <Experience />

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Contact</h2>
          <ContactCard />
        </div>
      </section>

      <Footer />
    </main>
  );
}
