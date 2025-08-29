import { motion, type Variants } from "framer-motion";
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
import { FaHeart, FaShare, FaStar } from "react-icons/fa";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, duration: 0.8 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hover: { scale: 1.03, transition: { type: "spring", stiffness: 300 } },
};

export default function CardsPage() {
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
        >
          Copy
        </button>
        {copied === codeText && (
          <span className="absolute top-2 right-16 text-green-400 font-semibold text-sm">
            Copiado!
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
    <motion.section
      className="w-full min-h-screen p-10 flex flex-col items-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full mb-12">
        <Navbar />
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
        Cards Showcase
      </h1>
      <p className="text-blue-300 text-lg mb-12 max-w-3xl text-center">
        Veja todos os tipos de card organizados por seções: estilos,
        arredondamentos, tamanhos, efeitos e conteúdo.
      </p>

      {/* Estilos de Card */}
      <section className="w-full max-w-6xl mb-16">
        <h2 className="text-2xl font-bold mb-6">Estilos de Card</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {variants.map((v) =>
            renderCardCode(
              <Card variant={v} rounded="lg" hoverEffect="lift">
                <CardHeader>
                  <CardTitle>{v} Card</CardTitle>
                  <CardDescription>
                    Card do tipo <b>{v}</b> com imagem e botões interativos.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CardImage
                    src="https://via.placeholder.com/400x200"
                    alt="Exemplo"
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
      </section>

      {/* Arredondamentos */}
      <section className="w-full max-w-6xl mb-16">
        <h2 className="text-2xl font-bold mb-6">Arredondamentos</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {roundeds.map((r) =>
            renderCardCode(
              <Card variant="elevated" rounded={r} hoverEffect="lift">
                <CardHeader>
                  <CardTitle>Arredondamento {r}</CardTitle>
                  <CardDescription>
                    Borda arredondada {r} com efeito lift.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CardImage
                    src="https://via.placeholder.com/400x200"
                    alt="Exemplo"
                  />
                </CardContent>
              </Card>,
              `<Card variant="elevated" rounded="${r}" hoverEffect="lift">...</Card>`
            )
          )}
        </div>
      </section>

      {/* Tamanhos */}
      <section className="w-full max-w-6xl mb-16">
        <h2 className="text-2xl font-bold mb-6">Tamanhos de Card</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {sizes.map((s) =>
            renderCardCode(
              <Card variant="elevated" size={s} rounded="lg" hoverEffect="lift">
                <CardHeader>
                  <CardTitle>Tamanho {s}</CardTitle>
                  <CardDescription>
                    Card com padding correspondente a {s}.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CardImage
                    src="https://via.placeholder.com/400x200"
                    alt="Exemplo"
                  />
                </CardContent>
              </Card>,
              `<Card variant="elevated" size="${s}" rounded="lg" hoverEffect="lift">...</Card>`
            )
          )}
        </div>
      </section>

      {/* Hover Effects */}
      <section className="w-full max-w-6xl mb-16">
        <h2 className="text-2xl font-bold mb-6">Hover Effects</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {hoverEffects.map((h) =>
            renderCardCode(
              <Card variant="elevated" rounded="lg" hoverEffect={h}>
                <CardHeader>
                  <CardTitle>Efeito {h}</CardTitle>
                  <CardDescription>
                    Interação suave com efeito <b>{h}</b>.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CardImage
                    src="https://via.placeholder.com/400x200"
                    alt="Exemplo"
                  />
                </CardContent>
              </Card>,
              `<Card variant="elevated" rounded="lg" hoverEffect="${h}">...</Card>`
            )
          )}
        </div>
      </section>

      {/* Avatar e Métricas */}
      <section className="w-full max-w-6xl mb-16">
        <h2 className="text-2xl font-bold mb-6">Card com Avatar e Métricas</h2>
        {renderCardCode(
          <Card variant="filled" rounded="xl" hoverEffect="scale">
            <CardHeader className="flex flex-col items-center">
              <CardAvatar
                src="https://via.placeholder.com/150"
                alt="Avatar"
                size="lg"
              />
              <CardTitle className="mt-2">Jane Doe</CardTitle>
              <CardDescription>Métricas e interação do usuário</CardDescription>
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
      </section>
    </motion.section>
  );
}
