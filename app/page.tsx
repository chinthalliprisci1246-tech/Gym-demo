import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import MapSection from "@/components/Map";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import Trainers from "@/components/Trainers";
import Transformations from "@/components/Transformations";


export default function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <Transformations />
      <Pricing />
      <Trainers />
      <Reviews />
      <MapSection />
      <Contact />
    </>
  );
}

