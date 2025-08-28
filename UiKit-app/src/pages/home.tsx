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
          title="Welcome to MyUI"
          subtitle="Your ultimate UI component library for React."
          ctaText="Get Started"
          onCtaClick={handlePrimaryClick}
          ctaSecondaryText="Learn More"
          onSecondaryClick={handleSecondaryClick}
          badgeText="New"
          image={
            <img
              src={
                "https://via.placeholder.com/400x300.png?text=Imagem+de+Exemplo"
              }
              alt="Exemplo"
              className="rounded-lg "
            />
          }
          bgGradient="from-secondary to-primary"
          textColor="text-text"
        />
      </div>
    </div>
  );
}
