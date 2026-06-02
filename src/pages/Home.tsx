import Hero from "@/components/home/Hero";
import PhotoMarquee from "@/components/home/PhotoMarquee";
import PromiseTiles from "@/components/home/PromiseTiles";
import PartyCarousel from "@/components/home/PartyCarousel";
import InclusivityCallout from "@/components/InclusivityCallout";
import IncludedBlock from "@/components/IncludedBlock";
import HowItWorksPreview from "@/components/home/HowItWorksPreview";
import SocialProof from "@/components/home/SocialProof";
import BirthdayGiftCallout from "@/components/BirthdayGiftCallout";
import FinalCTA from "@/components/FinalCTA";

const Home = () => (
  <>
    <Hero />
    <PhotoMarquee />
    <PromiseTiles />
    <PartyCarousel />
    <InclusivityCallout />
    <IncludedBlock />
    <HowItWorksPreview />
    <SocialProof />
    <BirthdayGiftCallout />
    <FinalCTA />
  </>
);

export default Home;
