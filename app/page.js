import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientDiscovery from "@/components/ClientDiscovery";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Verification from "@/components/Verification";
import Referral from "@/components/Referral";
import ForFirstMembers from "@/components/ForFirstMembers";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ClientDiscovery />
        <Problem />
        <HowItWorks />
        <Pricing />
        <Verification />
        <Referral />
        <ForFirstMembers />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
