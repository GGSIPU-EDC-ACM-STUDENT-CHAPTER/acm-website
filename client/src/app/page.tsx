import Hero from "@/components/Hero";

import AboutUs from "@/components/AboutUs";
import Teams from "@/components/Teams";
import Events from "@/components/Events";


export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      
      <Hero />
      <AboutUs />
      <Events />
      <Teams />
      
    </main>
  );
}
