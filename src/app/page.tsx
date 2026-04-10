import { HeroSection } from "@/components/sections/HeroSection";
import { ConceptSection } from "@/components/sections/ConceptSection";
import { MenuHighlight } from "@/components/sections/MenuHighlight";
import { AccessSection } from "@/components/sections/AccessSection";
import { NewsSection } from "@/components/sections/NewsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ConceptSection />
      <MenuHighlight />
      <AccessSection />
      <NewsSection />
    </>
  );
}
