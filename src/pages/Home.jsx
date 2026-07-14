import Hero from "../components/sections/Hero";
import AboutOverview from "../components/sections/AboutOverview";
import SolutionsBento from "../components/sections/SolutionsBento";
import ServicesAlternating from "../components/sections/ServicesAlternating";
import TechStaggered from "../components/sections/TechStaggered";
import StatsGrid from "../components/sections/StatsGrid";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import ClientsMarquee from "../components/sections/ClientsMarquee";
import HomeFAQ from "../components/sections/HomeFAQ";
import HomeCTA from "../components/sections/HomeCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientsMarquee />
      <AboutOverview />
      <SolutionsBento />
      <ServicesAlternating />
      <StatsGrid />
      <TechStaggered />
      <WhyChooseUs />
      <HomeFAQ />
      <HomeCTA />
    </>
  );
}
