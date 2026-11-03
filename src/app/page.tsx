import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/home/hero-section";

export default function Home() {
  return (
    <main className="landing-page">
      <Navbar />
      <HeroSection />
    </main>
  )
}
