import Hero from "@/components/home/Hero";
import { 
  AboutSection, 
  MarqueeSection, 
  ProjectsSection, 
  GallerySection,
  StoryTransition 
} from "@/components/home-v2";
import Teams from "@/components/home/Teams";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <AboutSection />
      <StoryTransition
        topLabel="Our Journey"
        mainText="Where curiosity becomes innovation"
        accentWord="innovation"
        subText="We don't just learn technology — we live it, breathe it, and build with it."
      />
      <GallerySection />
      <MarqueeSection />
      <ProjectsSection />
      <StoryTransition
        topLabel="Community"
        mainText="Built by students, for students"
        accentWord="students"
        subText="Join a community of passionate creators shaping the future of technology."
      />
      <Teams />
    </main>
  );
}
