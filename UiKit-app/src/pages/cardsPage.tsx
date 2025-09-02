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
import { useEffect, useState, type JSX } from "react";
import { FaHeart, FaShare, FaStar, FaRegCopy } from "react-icons/fa";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  hover: {
    scale: 1.02,
    transition: { type: "spring", stiffness: 250, damping: 20 },
  },
};

export default function CardsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      className="flex flex-col items-center w-full min-h-[220px]"
    >
      {cardElement}
      <div className="w-full relative mt-2">
        <code className="text-sm bg-slate-900 p-2 rounded w-full block text-center break-words">
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
          <span className="absolute top-2 right-10 text-green-400 font-semibold text-sm">
            Copied!
          </span>
        )}
      </div>
    </motion.div>
  );

  const variants = ["default", "elevated", "outlined", "filled"] as const;
  const roundeds = ["none", "sm", "md", "lg", "xl", "2xl"] as const;
  const sizes = ["sm", "md", "lg"] as const;
  const hoverEffects = ["none", "scale", "shadow", "lift"] as const;

  return (
    <section className="w-full min-h-screen p-10 flex flex-col items-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="w-full mb-12">
        <Navbar />
      </div>

      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
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
        Explore all types of cards organized by sections: styles, rounding,
        sizes, hover effects, and content.
      </motion.p>

      {/* Card Styles */}
      <motion.section
        className="w-full max-w-6xl mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl font-bold mb-6">Card Styles</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {variants.map((v) =>
            renderCardCode(
              <Card variant={v} rounded="lg" hoverEffect="lift">
                <CardHeader>
                  <CardTitle>{v} Card</CardTitle>
                  <CardDescription>
                    A <b>{v}</b> card with image and interactive buttons.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CardImage
                    src={example}
                    alt="Example"
                    className="min-h-[200px]"
                  />
                </CardContent>
                <CardFooter align="between">
                  <button>
                    <FaHeart className="text-red-500" />
                  </button>
                  <button>
                    <FaShare className="text-blue-500" />
                  </button>
                  <button>
                    <FaStar className="text-yellow-400" />
                  </button>
                </CardFooter>
              </Card>,
              `<Card variant="${v}" rounded="lg" hoverEffect="lift">...</Card>`
            )
          )}
        </div>
      </motion.section>

      {/* Card Rounding */}
      <motion.section
        className="w-full max-w-6xl mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl font-bold mb-6">Rounding</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {roundeds.map((r) =>
            renderCardCode(
              <Card variant="elevated" rounded={r} hoverEffect="lift">
                <CardHeader>
                  <CardTitle>Rounded {r}</CardTitle>
                  <CardDescription>
                    Rounded border {r} with lift effect.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CardImage
                    src={example}
                    alt="Example"
                    className="min-h-[200px]"
                  />
                </CardContent>
              </Card>,
              `<Card variant="elevated" rounded="${r}" hoverEffect="lift">...</Card>`
            )
          )}
        </div>
      </motion.section>

      {/* Card Sizes */}
      <motion.section
        className="w-full max-w-6xl mb-16 flex flex-wrap gap-6 justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl font-bold mb-6 w-full">Card Sizes</h2>
        {sizes.map((s) =>
          renderCardCode(
            <Card variant="elevated" size={s} rounded="lg" hoverEffect="lift">
              <CardHeader>
                <CardTitle>Size {s}</CardTitle>
                <CardDescription>
                  Card with padding corresponding to {s}.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CardImage
                  src={example}
                  alt="Example"
                  className="min-h-[200px]"
                />
              </CardContent>
            </Card>,
            `<Card variant="elevated" size="${s}" rounded="lg" hoverEffect="lift">...</Card>`
          )
        )}
      </motion.section>

      {/* Hover Effects */}
      <motion.section
        className="w-full max-w-6xl mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl font-bold mb-6">Hover Effects</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {hoverEffects.map((h) =>
            renderCardCode(
              <Card variant="elevated" rounded="lg" hoverEffect={h}>
                <CardHeader>
                  <CardTitle>
                    {h.charAt(0).toUpperCase() + h.slice(1)} Effect
                  </CardTitle>
                  <CardDescription>
                    Smooth interaction with <b>{h}</b> hover effect.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CardImage
                    src={example}
                    alt="Example"
                    className="min-h-[200px]"
                  />
                </CardContent>
              </Card>,
              `<Card variant="elevated" rounded="lg" hoverEffect="${h}">...</Card>`
            )
          )}
        </div>
      </motion.section>

      {/* Avatar & Metrics */}
      <motion.section
        className="w-full max-w-6xl mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl font-bold mb-6">Card with Avatar & Metrics</h2>
        {renderCardCode(
          <Card variant="filled" rounded="xl" hoverEffect="scale">
            <CardHeader className="flex flex-col items-center">
              <CardAvatar src={example} alt="Avatar" size="lg" />
              <CardTitle className="mt-2">Jane Doe</CardTitle>
              <CardDescription>User metrics and interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mt-4 w-full">
                <div className="flex flex-col items-center">
                  <span className="text-xl font-bold text-purple-400">120</span>
                  <span className="text-gray-400 text-sm">Likes</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xl font-bold text-blue-400">45</span>
                  <span className="text-gray-400 text-sm">Shares</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xl font-bold text-yellow-400">30</span>
                  <span className="text-gray-400 text-sm">Stars</span>
                </div>
              </div>
            </CardContent>
          </Card>,
          `<Card variant="filled" rounded="xl" hoverEffect="scale">...</Card>`
        )}
      </motion.section>
    </section>
  );
}
