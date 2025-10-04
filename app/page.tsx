import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCard from "@/components/ContactCard";
import Hero from "@/components/Hero"; // ← add this
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Extracurriculars from "@/components/Extracurriculars";

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

      {/* SKILLS */}
      <Skills />

      {/* EXPERIENCE */}
      <Experience />
      {/* EXTRA CURRICULARS*/}
      <Extracurriculars />

      {/* CONTACT */}
      <ContactCard />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
