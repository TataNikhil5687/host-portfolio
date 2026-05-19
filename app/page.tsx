import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectsGrid from "@/components/ProjectsGrid";
import TechStack from "@/components/TechStack";
import Timeline from "@/components/Timeline";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TechStack />
      <ProjectsGrid />
      <Timeline />
      <ContactForm />
    </main>
  );
}
