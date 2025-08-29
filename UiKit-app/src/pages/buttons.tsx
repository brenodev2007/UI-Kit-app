import { motion, type Variants } from "framer-motion";
import Button from "../components/button/Button";
import ButtonIcon from "../components/button/ButtonIcon";
import { FaCoffee, FaCheck, FaTrash, FaCopy } from "react-icons/fa";
import { useState, type JSX } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 15px 25px rgba(59,130,246,0.4)",
    transition: { type: "spring", stiffness: 300 },
  },
};

export default function ButtonsPage() {
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
      className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex flex-col items-center gap-4 cursor-pointer relative"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
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
    <motion.section
      className="w-full min-h-screen p-10 flex flex-col items-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Intro */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
        Buttons Showcase
      </h1>
      <p className="text-blue-300 text-lg mb-12 max-w-3xl text-center">
        Explore all the button styles, sizes, and variations.
        <br />
        Copy the code below each example to use in your project 🚀
      </p>

      {/* Variants */}
      <section className="w-full max-w-6xl mb-16">
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
      </section>

      {/* Sizes */}
      <section className="w-full max-w-6xl mb-16">
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
      </section>

      {/* Rounded */}
      <section className="w-full max-w-6xl mb-16">
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
      </section>

      {/* Shadows */}
      <section className="w-full max-w-6xl mb-16">
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
      </section>

      {/* ButtonIcon */}
      <section className="w-full max-w-6xl mb-16">
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
      </section>
    </motion.section>
  );
}
