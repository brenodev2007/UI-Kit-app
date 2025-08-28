import { Hero } from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  const handlePrimaryClick = () => {
    alert("Você clicou no botão principal!");
  };

  const handleSecondaryClick = () => {
    alert("Você clicou no botão secundário!");
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />

      <div className="container mx-auto px-4 py-20">
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
              src={"/hero-image.png"}
              alt="Produto"
              className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          }
          bgGradient="from-secondary to-primary"
          textColor="text-text"
        />
      </div>
    </div>
  );
}
