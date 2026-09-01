import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Hotels } from "@/components/Hotels";
import { Inclusions } from "@/components/Inclusions";
import { Itinerary } from "@/components/Itinerary";
import { Pricing } from "@/components/Pricing";
import { Terms } from "@/components/Terms";

export default function Home() {
  return (
    <main className="min-h-full w-full overflow-x-hidden bg-[#f4f1ea]">
      <Hero />
      <Itinerary />
      <Hotels />
      <Pricing />
      <Inclusions />
      <Terms />
      <Footer />
    </main>
  );
}
