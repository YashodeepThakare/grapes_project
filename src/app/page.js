import Hero from "./sections/hero/hero";
import About from "./sections/About/about";
import GrapesVarieties from "./sections/type/type";
import TeamSection from "./sections/Team/team";
import Gallery from "./sections/Gallery/gallery";
import Mentor from "./sections/Mentor/mentor";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <Hero />
      <About />
      <GrapesVarieties />
      <TeamSection />
      <Gallery />
      <Mentor />
    </main>
  );
}