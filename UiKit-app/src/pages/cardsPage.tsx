import { motion, type Variants } from "framer-motion";
import example from "../assets/cascata-barco-limpo-china-natural-rural.jpg";
import Navbar from "../components/Navbar";
import Card, {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardImage,
  CardAvatar,
} from "../components/cards/Cards";
import { useState, type JSX } from "react";
import { FaHeart, FaShare, FaStar, FaRegCopy } from "react-icons/fa";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  hover: {
    scale: 1.03,
    boxShadow: "0 10px 20px rgba(59,130,246,0.4)", // azul igual ButtonsPage
    transition: { type: "spring", stiffness: 250, damping: 20 },
  },
};

export default function CardsPage() {
  useState(() => {
    window.scrollTo(0, 0);
  });
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 1500);
  };

  const renderCardCode = (cardElement: JSX.Element, codeText: string) => (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="flex flex-col items-center w-full"
    >
      {cardElement}
      <div className="w-full relative mt-3">
        <code className="text-xs bg-slate-900 px-4 py-2 rounded w-full block text-center break-words">
          {codeText}
        </code>
        <button
          onClick={() => handleCopy(codeText)}
          className="absolute top-2 right-2 text-blue-400 hover:text-blue-200 transition-transform hover:scale-110"
          title="Copy code"
        >
          <FaRegCopy />
        </button>
        {copied === codeText && (
          <span className="absolute top-2 right-10 text-green-400 font-semibold text-xs">
            Copied!
          </span>
        )}
      </div>
    </motion.div>
  );

  const variants = ["default", "elevated", "outlined", "filled"] as const;

  return (
    <section className="w-full min-h-screen p-10 flex flex-col items-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navbar */}
      <div className="w-full mb-12">
        <Navbar />
      </div>

      {/* Intro */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      >
        Cards Showcase
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
        Explore all the card styles, variations and layouts.
        <br />
        Copy the code below each example to use in your project 🚀
      </motion.p>

      {/* Card Styles */}
      <motion.section
        className="w-full max-w-5xl mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Card Styles
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {variants.map((v) =>
            renderCardCode(
              <Card
                variant={v}
                rounded="lg"
                hoverEffect="lift"
                className="max-w-sm"
              >
                <CardHeader>
                  <CardTitle>{v} Card</CardTitle>
                  <CardDescription>
                    A <b>{v}</b> card example.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CardImage
                    src={example}
                    alt="Example"
                    className="h-32 object-cover rounded"
                  />
                </CardContent>
                <CardFooter align="center" className="gap-4">
                  <FaHeart className="text-red-500 cursor-pointer hover:scale-110 transition" />
                  <FaShare className="text-blue-500 cursor-pointer hover:scale-110 transition" />
                  <FaStar className="text-yellow-400 cursor-pointer hover:scale-110 transition" />
                </CardFooter>
              </Card>,
              `<Card variant="${v}" rounded="lg">...</Card>`
            )
          )}

          {/* Avatar Card */}
          {renderCardCode(
            <Card
              variant="elevated"
              rounded="xl"
              hoverEffect="scale"
              className="max-w-sm text-center"
            >
              <CardHeader className="flex flex-col items-center">
                <CardAvatar
                  src={example}
                  alt="Avatar"
                  size="lg"
                  className="ring-2 ring-cyan-400"
                />
                <CardTitle className="mt-3">Jane Doe</CardTitle>
                <CardDescription>UI Designer & Creator</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm">
                  Creating modern and accessible UI components with love.
                </p>
              </CardContent>
              <CardFooter align="center" className="gap-4">
                <FaHeart className="text-red-500 cursor-pointer hover:scale-110 transition" />
                <FaShare className="text-blue-500 cursor-pointer hover:scale-110 transition" />
                <FaStar className="text-yellow-400 cursor-pointer hover:scale-110 transition" />
              </CardFooter>
            </Card>,
            `<Card variant="elevated" rounded="xl" hoverEffect="scale">...</Card>`
          )}
        </div>
      </motion.section>
    </section>
  );
}
