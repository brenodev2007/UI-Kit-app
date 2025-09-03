import React from "react";
import { motion, easeOut, type Variants } from "framer-motion";
import { Link } from "react-router-dom";

import {
  SquareStack, // Cards
  Puzzle, // Extras
  MessageSquare, // Feedbacks
  Nut, // Input
  ListTree, // List
  Navigation,
  MousePointerClick, // Navbar
} from "lucide-react";

export interface ShowcaseItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

export interface ComponentShowcaseProps {
  headline?: string;
  subtitle?: string;
  components: ShowcaseItem[];
  className?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut, staggerChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  hover: {
    scale: 1.05,

    transition: { type: "spring", stiffness: 300 },
  },
};

export const showcaseItems: ShowcaseItem[] = [
  {
    id: "cards",
    title: "Cards",
    description: "Elegant cards to highlight information.",
    icon: <SquareStack className="text-purple-400" />,
    link: "/cards",
  },
  {
    id: "buttons",
    title: "Buttons",
    description: "Versatile buttons for various actions.",
    icon: <MousePointerClick className="text-red-400" />,
    link: "/button",
  },
  {
    id: "extras",
    title: "Extras",
    description: "Utility components to enrich your interface.",
    icon: <Puzzle className="text-yellow-400" />,
    link: "/extras",
  },
  {
    id: "feedbacks",
    title: "Feedbacks",
    description: "Alerts, toasts and messages to the user.",
    icon: <MessageSquare className="text-pink-400" />,
    link: "/feedbacks",
  },
  {
    id: "input",
    title: "Input",
    description: "Intuitive and responsive input fields.",
    icon: <Nut className="text-green-400" />,
    link: "/input",
  },
  {
    id: "list",
    title: "List",
    description: "Dynamic and organized lists.",
    icon: <ListTree className="text-orange-400" />,
    link: "/list",
  },
  {
    id: "navbar",
    title: "Navbar Templates",
    description: "Modern and responsive navigation templates.",
    icon: <Navigation className="text-blue-400" />,
    link: "/navbar",
  },
];

export default function ComponentShowcase({
  headline = "Component Library Showcase",
  subtitle = "Explore nossa coleção de componentes React profissionais",
  components = showcaseItems,
  className = "",
}: ComponentShowcaseProps) {
  return (
    <motion.section
      className={`w-full min-h-screen flex flex-col items-center p-6 md:p-12 ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-2 text-white"
        variants={cardVariants}
      >
        {headline}
      </motion.h2>

      <motion.div
        className="w-20 h-1 bg-blue-900 rounded-full mb-6"
        variants={cardVariants}
      />

      <motion.h3
        className="text-lg md:text-xl text-blue-300 mb-6 font-semibold"
        variants={cardVariants}
      >
        {subtitle}
      </motion.h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-7xl mb-10">
        {components.map(({ id, title, description, icon, link }) => (
          <motion.div
            key={id}
            className="flex flex-col items-start gap-5 rounded-xl p-6 cursor-pointer bg-opacity-30 border border-blue-900 transition-colors duration-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              },
              hover: {
                scale: 1.05,
                borderColor: "rgb(34 211 238)", // cyan-400
                boxShadow: "0 10px 20px rgba(29, 78, 216, 0.3)",
                transition: { duration: 0.3, ease: "easeOut" },
              },
            }}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
          >
            <span className="text-5xl">{icon}</span>
            <div>
              <h4 className="font-semibold text-white text-xl md:text-2xl mb-1">
                {title}
              </h4>
              <p className="text-blue-300 text-sm md:text-base mb-4">
                {description}
              </p>
              <Link
                to={link}
                className="inline-block bg-black hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow transition-colors duration-300"
              >
                View {title}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
