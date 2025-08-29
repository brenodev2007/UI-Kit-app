import React from "react";
import { motion, easeOut } from "framer-motion";
import { FaCheckCircle, FaLightbulb, FaHeadset } from "react-icons/fa";
import AboutImg from "../assets/Search engines-amico.svg";

export interface AboutSectionAdvancedProps {
  headline?: string;
  subtitle?: string;
  text?: string;
  imageSrc?: string;
  imageAlt?: string;
  reverse?: boolean;
  values?: { icon?: React.ReactNode; title: string; description: string }[];
  ctaText?: string;
  onCtaClick?: () => void;
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut, staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  hover: { scale: 1.05, boxShadow: "0 10px 20px rgba(29, 78, 216, 0.3)" },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easeOut,
      yoyo: Infinity,
      repeatDelay: 2,
    },
  },
  tap: { scale: 0.95 },
};

export default function AboutSection({
  headline = "About Us",
  subtitle = "Committed to excellence and innovation",
  text = "We are a dedicated team focused on delivering high-quality digital solutions. We transform ideas into real, impactful products that drive success.",
  imageSrc = "https://via.placeholder.com/600x450",
  imageAlt = "About us image",
  reverse = false,
  values = [
    {
      icon: <FaCheckCircle />,
      title: "Quality",
      description: "Always delivering with a high standard",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "Modern and creative solutions",
    },
    {
      icon: <FaHeadset />,
      title: "Support",
      description: "Fast and efficient customer service",
    },
  ],
  ctaText = "Learn More",
  onCtaClick,
  className = "",
}: AboutSectionAdvancedProps) {
  return (
    <motion.section
      className={`w-full min-h-screen flex items-center  p-6 md:p-12 ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div
        className={`max-w-7xl mx-auto flex flex-col md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        } items-center gap-12 md:gap-20`}
      >
        {/* Texto */}
        <motion.div className="flex-1">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-2 text-white"
            variants={itemVariants}
          >
            {headline}
          </motion.h2>
          {/* Linha decorativa */}
          <motion.div
            className="w-20 h-1 bg-blue-900 rounded-full mb-6"
            variants={itemVariants}
          />
          <motion.h3
            className="text-lg md:text-xl text-blue-300 mb-6 font-semibold"
            variants={itemVariants}
          >
            {subtitle}
          </motion.h3>
          <motion.p
            className="text-blue-200 text-base md:text-lg leading-relaxed mb-6"
            variants={itemVariants}
          >
            {text}
          </motion.p>
          <motion.p
            className="text-blue-300 text-sm md:text-base mb-10"
            variants={itemVariants}
          >
            Our mission is to empower businesses with cutting-edge technology
            and unparalleled support. Join us on this journey to innovate and
            excel.
          </motion.p>

          {/* Valores/Benefícios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
            {values.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-5 rounded-lg p-4 cursor-pointer bg-blue-950 bg-opacity-30"
                variants={itemVariants}
                whileHover="hover"
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-blue-400 text-4xl">
                  {item.icon || "✓"}
                </span>
                <div>
                  <h4 className="font-semibold text-white text-xl md:text-2xl mb-1">
                    {item.title}
                  </h4>
                  <p className="text-blue-300 text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          {ctaText && (
            <motion.button
              variants={buttonVariants}
              whileTap="tap"
              onClick={onCtaClick}
              className="bg-black hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-xl shadow-lg transition-colors duration-300 cursor-pointer"
            >
              {ctaText}
            </motion.button>
          )}
        </motion.div>

        {/* Imagem */}
        {imageSrc && (
          <motion.div
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="flex-1 max-w-md md:max-w-lg overflow-hidden "
          >
            <img
              src={AboutImg}
              alt={imageAlt}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
