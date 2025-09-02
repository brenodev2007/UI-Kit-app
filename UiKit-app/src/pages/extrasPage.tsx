import { motion, type Variants } from "framer-motion";
import Navbar from "../components/Navbar";
import { Avatar } from "../components/extras/avatar";
import Loader from "../components/extras/loader";
import { useState, type JSX } from "react";
import { FaRegCopy } from "react-icons/fa";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  hover: {
    y: -5,
    scale: 1.05,
    transition: { type: "spring", stiffness: 250, damping: 20 },
  },
};

export default function ExtrasPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 1500);
  };

  const renderCodeCard = (element: JSX.Element, code: string) => (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="flex flex-col items-center w-full"
    >
      {element}
      <div className="w-full relative mt-3">
        <code className="text-xs bg-slate-900 px-4 py-2 rounded w-full block text-center break-words">
          {code}
        </code>
        <button
          onClick={() => handleCopy(code)}
          className="absolute top-2 right-2 text-blue-400 hover:text-blue-200 transition-transform hover:scale-110"
          title="Copy code"
        >
          <FaRegCopy />
        </button>
        {copied === code && (
          <span className="absolute top-2 right-10 text-green-400 font-semibold text-xs">
            Copied!
          </span>
        )}
      </div>
    </motion.div>
  );

  return (
    <section className="w-full min-h-screen p-10 flex flex-col items-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="w-full mb-12">
        <Navbar />
      </div>

      {/* Intro */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500 tracking-tight drop-shadow-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      >
        Extras Playground
      </motion.h1>
      <motion.p
        className="text-purple-300 text-lg mb-12 max-w-3xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, delay: 0.2 },
        }}
      >
        Test and copy the code of Avatars, Loaders, and extra interactive
        elements.
      </motion.p>

      {/* Avatars */}
      <motion.section
        className="w-full max-w-6xl mb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-3xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 tracking-tight drop-shadow-sm">
          Avatars
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-center items-center">
          {renderCodeCard(
            <div className="relative">
              <Avatar name="Alice" size="sm" />
              <span
                className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-slate-900 rounded-full"
                title="Online"
              />
            </div>,
            `<Avatar name="Alice" size="sm" />`
          )}
          {renderCodeCard(
            <div className="relative">
              <Avatar name="Bob" size="md" rounded="lg" />
              <span
                className="absolute bottom-0 right-0 w-3 h-3 bg-yellow-400 border-2 border-slate-900 rounded-full"
                title="Away"
              />
            </div>,
            `<Avatar name="Bob" size="md" rounded="lg" />`
          )}
          {renderCodeCard(
            <div className="relative">
              <Avatar name="Charlie" size="lg" rounded="full" />
              <span
                className="absolute bottom-0 right-0 w-3 h-3 bg-red-500 border-2 border-slate-900 rounded-full"
                title="busy"
              />
            </div>,
            `<Avatar name="Charlie" size="lg" rounded="full"/>`
          )}
          {renderCodeCard(
            <div className="relative">
              <Avatar
                src="https://i.pravatar.cc/150?img=5"
                name="Jane"
                size="lg"
              />
              <span
                className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-slate-900 rounded-full"
                title="Online"
              />
            </div>,
            `<Avatar src="https://i.pravatar.cc/150?img=5" name="Jane" size="lg" />`
          )}
        </div>
      </motion.section>

      {/* Loaders */}
      <motion.section
        className="w-full max-w-6xl mb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-3xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500 tracking-tight drop-shadow-sm">
          Loaders
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-center items-center">
          {renderCodeCard(
            <Loader variant="spinner" size="sm" color="#3b82f6" />,
            `<Loader variant="spinner" size="sm" color="#3b82f6" />`
          )}
          {renderCodeCard(
            <Loader variant="dots" size="md" color="#ec4899" />,
            `<Loader variant="dots" size="md" color="#ec4899" />`
          )}
          {renderCodeCard(
            <Loader variant="pulse" size="lg" color="#22c55e" />,
            `<Loader variant="pulse" size="lg" color="#22c55e" />`
          )}
          {renderCodeCard(
            <Loader variant="spinner" size="lg" color="#f59e0b" />,
            `<Loader variant="spinner" size="lg" color="#f59e0b" />`
          )}
        </div>
      </motion.section>
    </section>
  );
}
