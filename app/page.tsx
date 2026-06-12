import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Pricing } from "@/components/sections/Pricing";
import { Trainers } from "@/components/sections/Trainers";
import { Testimonials } from "@/components/sections/Testimonials";
import { Schedule } from "@/components/sections/Schedule";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Pricing />
        <Trainers />
        <Testimonials />
        <Schedule />
        <FAQ />
        <Contact />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
