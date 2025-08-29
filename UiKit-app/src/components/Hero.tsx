import React from "react";
import { motion, type Variants } from "framer-motion";

export interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaSecondaryText?: string;
  onCtaClick?: () => void;
  onSecondaryClick?: () => void;
  className?: string;
  image?: React.ReactNode;
  reverse?: boolean;
  badgeText?: string;
  bgGradient?: string;
  textColor?: string;
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const imageVariants: Variants = {
  hidden: (reverse: boolean) => ({ opacity: 0, x: reverse ? -50 : 50 }),
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  tap: { scale: 0.95 },
};

const hoverWhite = {
  backgroundColor: "transparent",
  color: "white",
};

const hoverTransparent = {
  color: "#1e40af", // blue-800
  backgroundColor: "white",
};

export function Hero({
  title = "Transforme sua produtividade",
  subtitle = "Automatize processos, economize tempo e aumente seus resultados com nossa plataforma.",
  ctaText = "Comece Agora",
  ctaSecondaryText,
  onCtaClick,
  onSecondaryClick,
  className = "",
  image,
  reverse = false,
  badgeText = "Oferta Limitada",
  bgGradient = "from-blue-800 to-blue-700",
  textColor = "text-white",
}: HeroProps) {
  return (
    <section
      className={`w-full flex flex-col md:flex-row items-center justify-between py-20 px-6 md:px-16 bg-gradient-to-r ${bgGradient} ${textColor} ${className} ${
        reverse ? "md:flex-row-reverse" : ""
      } relative`}
    >
      {/* Texto */}
      <motion.div
        className="flex-1 mb-10 md:mb-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {badgeText && (
          <motion.div
            className="inline-block mb-4 px-4 py-1 bg-blue-900 bg-opacity-30 text-white font-semibold rounded-full text-sm animate-pulse"
            variants={textVariants}
          >
            {badgeText}
          </motion.div>
        )}
        <motion.h1
          className="text-5xl font-extrabold mb-4 leading-tight text-white"
          variants={textVariants}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-xl mb-8 opacity-90 text-blue-200"
          variants={textVariants}
        >
          {subtitle}
        </motion.p>

        {/* Botões */}
        <div className="flex flex-wrap gap-5">
          {ctaText && onCtaClick && (
            <motion.button
              onClick={onCtaClick}
              variants={buttonVariants}
              whileHover={hoverTransparent}
              whileTap="tap"
              className="bg-transparent text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-500"
            >
              {ctaText}
            </motion.button>
          )}
          {ctaSecondaryText && onSecondaryClick && (
            <motion.button
              onClick={onSecondaryClick}
              variants={buttonVariants}
              whileHover={hoverWhite}
              whileTap="tap"
              className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg transition-all duration-500"
            >
              {ctaSecondaryText}
            </motion.button>
          )}
        </div>

        {/* Benefícios rápidos */}
        <div className="flex justify-start gap-10 mt-12 flex-wrap">
          {["Fast and efficient", "100% Safe", "Support 24/7"].map(
            (benefit, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <p className="text-blue-200 text-sm text-center hover:text-white cursor-pointer transition-colors duration-300 relative group">
                  {benefit}
                </p>
              </div>
            )
          )}
        </div>
      </motion.div>

      {/* Imagem */}
      {image && (
        <motion.div
          className="flex-1 ml-4"
          custom={reverse}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.02 }}
        >
          {image}
        </motion.div>
      )}
    </section>
  );
}
