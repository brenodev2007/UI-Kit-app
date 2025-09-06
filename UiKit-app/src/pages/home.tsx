import { Hero } from "../components/Hero";
import Navbar from "../components/Navbar";
import teste from "../assets/operating-system-upgrade-animate.svg";
import AboutSection from "../components/About";
import ComponentShowcase, { showcaseItems } from "../components/ShowCase";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import CTASection from "./CtaSection";

export default function Home() {
  const navigate = useNavigate();
  const componentsSectionRef = useRef<HTMLDivElement>(null);
  const handlePrimaryClick = () => {
    componentsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSecondaryClick = () => {
    navigate("/demo");
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />

      <div className="container mx-auto px-4 py-25">
        <Hero
          title="Transform your productivity"
          subtitle="Automate processes, save time, and increase your results with our platform."
          ctaText="Start Now"
          onCtaClick={handlePrimaryClick}
          ctaSecondaryText="View Demo"
          onSecondaryClick={handleSecondaryClick}
          badgeText=" Limited Offer"
          image={
            <img
              src={teste}
              alt="Produto"
              className="rounded-lg hover:scale-102 transition-transform duration-500 w-xl m-auto"
            />
          }
          bgGradient="from-secondary to-primary"
          textColor="text-text"
        />
      </div>

      <div className="container mx-auto  px-4 py-10">
        <AboutSection />
      </div>

      <div
        className="container mx-auto px-4 py-10"
        ref={componentsSectionRef}
        id="Components"
      >
        <ComponentShowcase components={showcaseItems} />
      </div>

      <div className="container mx-auto px-4 py-10">
        <CTASection />
      </div>
    </div>
  );
}
