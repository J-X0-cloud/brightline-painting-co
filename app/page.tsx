import { AreasSection } from "@/components/home/AreasSection";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { RecentWork } from "@/components/home/RecentWork";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhySection } from "@/components/home/WhySection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { Reviews } from "@/components/sections/Reviews";
import { homeFaqs } from "@/lib/data/content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesOverview />
      <AreasSection />
      <RecentWork />
      <WhySection />
      <ProcessSection />
      <Reviews />
      <FaqSection title="The questions we hear most." faqs={homeFaqs} />
      <QuoteSection />
    </>
  );
}
