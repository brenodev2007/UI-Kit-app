import { motion, type Variants } from "framer-motion";
import Button from "../components/button/Button";
import ButtonIcon from "../components/button/ButtonIcon";
import { FaCoffee, FaCheck, FaTrash, FaCopy } from "react-icons/fa";
import { useEffect, useState, type JSX } from "react";
import Navbar from "../components/Navbar";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  hover: {
    scale: 1.03,
    boxShadow: "0 10px 20px rgba(59,130,246,0.4)",
    transition: { type: "spring", stiffness: 250, damping: 20 },
  },
};

export default function ButtonsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const variants = [
    "primary",
    "secondary",
    "outline",
    "ghost",
    "danger",
    "success",
    "icon",
  ] as const;
  const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
  const roundeds = ["none", "sm", "md", "lg", "full"] as const;
  const shadows = ["none", "sm", "md", "lg", "xl"] as const;

  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 1500);
  };

  const renderCodeCard = (buttonElement: JSX.Element, codeText: string) => (
    <motion.div
      className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex flex-col items-center gap-4 cursor-pointer relative min-h-[120px]"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      {buttonElement}
      <div className="w-full relative mt-2 flex flex-col items-center">
        <code className="text-sm bg-slate-900 p-2 rounded w-full text-center block">
          {codeText}
        </code>
        <button
          onClick={() => handleCopy(codeText)}
          className="absolute top-2 right-2 text-blue-400 hover:text-blue-200 transition-transform hover:scale-110"
          title="Copiar"
        >
          <FaCopy />
        </button>
        {copied === codeText && (
          <span className="absolute top-2 right-8 text-green-400 font-semibold text-sm">
            Copiado!
          </span>
        )}
      </div>
    </motion.div>
  );

  return (
    <section className="w-full min-h-screen p-10 flex flex-col items-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navbar */}
      <div className="w-full mb-30">
        <Navbar />
      </div>

      {/* Intro */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      >
        Buttons Showcase
      </motion.h1>
      <motion.p
        className="text-blue-300 text-lg mb-12 max-w-3xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, delay: 0.2 },
        }}
      >
        Explore all the button styles, sizes, and variations.
        <br />
        Copy the code below each example to use in your project 🚀
      </motion.p>

      {/* Variants */}
      <motion.section
        className="w-full max-w-6xl mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Variants
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
          {variants.map((v) =>
            renderCodeCard(
              <Button variant={v as any}>{v}</Button>,
              `<Button variant="${v}">Texto</Button>`
            )
          )}
        </div>
      </motion.section>

      {/* Sizes */}
      <motion.section
        className="w-full max-w-6xl mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Sizes
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {sizes.map((s) =>
            renderCodeCard(
              <Button size={s as any}>{s}</Button>,
              `<Button size="${s}">Texto</Button>`
            )
          )}
        </div>
      </motion.section>

      {/* Rounded */}
      <motion.section
        className="w-full max-w-6xl mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Rounded
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {roundeds.map((r) =>
            renderCodeCard(
              <Button rounded={r as any}>{r}</Button>,
              `<Button rounded="${r}">Texto</Button>`
            )
          )}
        </div>
      </motion.section>

      {/* Shadows */}
      <motion.section
        className="w-full max-w-6xl mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Shadows
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {shadows.map((s) =>
            renderCodeCard(
              <Button shadow={s as any}>{s}</Button>,
              `<Button shadow="${s}">Texto</Button>`
            )
          )}
        </div>
      </motion.section>

      {/* Button with Icon */}
      <motion.section
        className="w-full max-w-6xl mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Button with Icon
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {renderCodeCard(
            <ButtonIcon text="Coffee" icon={<FaCoffee />} />,
            `<ButtonIcon text="Coffee" icon={<FaCoffee />} />`
          )}
          {renderCodeCard(
            <ButtonIcon text="Confirm" icon={<FaCheck />} variant="ghost" />,
            `<ButtonIcon text="Confirm" icon={<FaCheck />} variant="ghost" />`
          )}
          {renderCodeCard(
            <ButtonIcon
              icon={<FaTrash />}
              ariaLabel="Delete"
              variant="danger"
            />,
            `<ButtonIcon icon={<FaTrash />} ariaLabel="Delete" variant="danger" />`
          )}
        </div>
      </motion.section>
    </section>
  );
}
