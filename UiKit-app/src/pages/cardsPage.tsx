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
import { useState, type JSX, useEffect } from "react";
import {
  FaHeart,
  FaShare,
  FaStar,
  FaRegCopy,
  FaCheck,
  FaUser,
  FaImage,
} from "react-icons/fa";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  hover: {
    scale: 1.02,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5)",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

export default function CardsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [copied, setCopied] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("styles");

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 1500);
  };

  const renderCardCode = (
    cardElement: JSX.Element,
    codeText: string,
    type: string
  ) => (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="flex flex-col items-center w-full"
    >
      {cardElement}
      <div className="w-full relative mt-4">
        <code className="text-xs bg-gray-900 px-4 py-2 rounded w-full block text-center overflow-x-auto">
          {codeText}
        </code>
        <button
          onClick={() => handleCopy(codeText, type)}
          className="absolute top-2 right-2 text-blue-400 hover:text-blue-200 transition-transform hover:scale-110"
          title="Copiar código"
        >
          {copied === type ? (
            <FaCheck className="text-green-400" />
          ) : (
            <FaRegCopy />
          )}
        </button>
      </div>
    </motion.div>
  );

  const variants = ["default", "elevated", "outlined", "filled"] as const;

  return (
    <section className="w-full min-h-screen p-4 md:p-10 flex flex-col items-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navbar */}
      <div className="w-full mb-8 md:mb-12">
        <Navbar />
      </div>

      {/* Intro */}
      <motion.h1
        className="text-3xl md:text-5xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      >
        Componentes de Card
      </motion.h1>

      <motion.p
        className="text-cyan-300 text-base md:text-lg mb-8 md:mb-12 max-w-3xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, delay: 0.2 },
        }}
      >
        Explore todos os estilos, variações e layouts de cards.
        <br />
        Copie o código abaixo de cada exemplo para usar em seus projetos! 🚀
      </motion.p>

      {/* Tabs de Navegação */}
      <motion.div
        className="flex flex-wrap gap-2 mb-8 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.3 } }}
      >
        {[
          { id: "styles", label: "Estilos", icon: <FaImage /> },
          { id: "content", label: "Conteúdos", icon: <FaUser /> },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-md transition-colors flex items-center gap-2 ${
              activeTab === tab.id
                ? "bg-cyan-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </motion.div>

      {/* Card Styles */}
      {activeTab === "styles" && (
        <motion.section
          className="w-full max-w-6xl mb-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">
            Estilos de Card
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {variants.map((v) =>
              renderCardCode(
                <Card
                  variant={v}
                  rounded="lg"
                  hoverEffect="lift"
                  className="max-w-sm"
                >
                  <CardHeader>
                    <CardTitle>
                      {v.charAt(0).toUpperCase() + v.slice(1)} Card
                    </CardTitle>
                    <CardDescription>
                      Exemplo de card <b>{v}</b>.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CardImage
                      src={example}
                      alt="Exemplo"
                      className="h-32 object-cover rounded"
                    />
                  </CardContent>
                  <CardFooter align="center" className="gap-4">
                    <FaHeart className="text-red-500 cursor-pointer hover:scale-110 transition" />
                    <FaShare className="text-blue-500 cursor-pointer hover:scale-110 transition" />
                    <FaStar className="text-yellow-400 cursor-pointer hover:scale-110 transition" />
                  </CardFooter>
                </Card>,
                `<Card variant="${v}" rounded="lg" hoverEffect="lift">\n  <CardHeader>\n    <CardTitle>${v} Card</CardTitle>\n    <CardDescription>Descrição do card</CardDescription>\n  </CardHeader>\n  <CardContent>\n    <CardImage src="imagem.jpg" alt="Descrição" />\n  </CardContent>\n  <CardFooter>\n    {/* Conteúdo do footer */}\n  </CardFooter>\n</Card>`,
                `card-${v}`
              )
            )}
          </div>
        </motion.section>
      )}

      {/* Card Content Types */}
      {activeTab === "content" && (
        <motion.section
          className="w-full max-w-6xl mb-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">
            Tipos de Conteúdo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                  <CardTitle className="mt-3">João Silva</CardTitle>
                  <CardDescription>Designer UI & Desenvolvedor</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm">
                    Criando componentes modernos e acessíveis com paixão.
                  </p>
                </CardContent>
                <CardFooter align="center" className="gap-4">
                  <FaHeart className="text-red-500 cursor-pointer hover:scale-110 transition" />
                  <FaShare className="text-blue-500 cursor-pointer hover:scale-110 transition" />
                  <FaStar className="text-yellow-400 cursor-pointer hover:scale-110 transition" />
                </CardFooter>
              </Card>,
              `<Card variant="elevated" rounded="xl" hoverEffect="scale">\n  <CardHeader className="flex flex-col items-center">\n    <CardAvatar src="avatar.jpg" alt="Nome" size="lg" />\n    <CardTitle>Nome do Usuário</CardTitle>\n    <CardDescription>Cargo/Descrição</CardDescription>\n  </CardHeader>\n  <CardContent>\n    <p>Texto descritivo</p>\n  </CardContent>\n  <CardFooter align="center">\n    {/* Ícones de ação */}\n  </CardFooter>\n</Card>`,
              "card-avatar"
            )}

            {/* Simple Content Card */}
            {renderCardCode(
              <Card variant="outlined" rounded="md" className="max-w-sm">
                <CardHeader>
                  <CardTitle>Card Simples</CardTitle>
                  <CardDescription>
                    Card apenas com conteúdo textual
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Este é um exemplo de card com conteúdo textual simples, sem
                    imagens ou avatares. Ideal para exibir informações textuais
                    de forma organizada.
                  </p>
                </CardContent>
                <CardFooter>
                  <button className="px-4 py-2 bg-cyan-600 rounded-md hover:bg-cyan-500 transition-colors">
                    Ação
                  </button>
                </CardFooter>
              </Card>,
              `<Card variant="outlined" rounded="md">\n  <CardHeader>\n    <CardTitle>Título do Card</CardTitle>\n    <CardDescription>Descrição breve</CardDescription>\n  </CardHeader>\n  <CardContent>\n    <p>Conteúdo textual do card</p>\n  </CardContent>\n  <CardFooter>\n    <button>Ação</button>\n  </CardFooter>\n</Card>`,
              "card-simple"
            )}

            {/* Image Focus Card */}
            {renderCardCode(
              <Card
                variant="default"
                rounded="lg"
                className="max-w-sm overflow-hidden"
              >
                <CardImage
                  src={example}
                  alt="Destaque"
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>Card com Imagem em Destaque</CardTitle>
                  <CardDescription>
                    Imagem com maior ênfase visual
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">
                    Este layout prioriza a imagem como elemento principal do
                    card.
                  </p>
                </CardContent>
              </Card>,
              `<Card variant="default" rounded="lg" className="overflow-hidden">\n  <CardImage src="imagem.jpg" alt="Descrição" className="w-full h-48 object-cover" />\n  <CardHeader>\n    <CardTitle>Título</CardTitle>\n    <CardDescription>Descrição</CardDescription>\n  </CardHeader>\n  <CardContent>\n    <p>Conteúdo adicional</p>\n  </CardContent>\n</Card>`,
              "card-image-focused"
            )}

            {/* Action Card */}
            {renderCardCode(
              <Card
                variant="filled"
                rounded="xl"
                className="max-w-sm text-center"
              >
                <CardHeader>
                  <CardTitle>Card de Ação</CardTitle>
                  <CardDescription>Foco em ações e interações</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Este card é ideal para destacar ações primárias.
                  </p>
                </CardContent>
                <CardFooter align="center" className="flex-col gap-3">
                  <button className="w-full py-2 bg-cyan-600 rounded-md hover:bg-cyan-500 transition-colors">
                    Ação Principal
                  </button>
                  <button className="text-cyan-400 hover:text-cyan-300 text-sm">
                    Ação Secundária
                  </button>
                </CardFooter>
              </Card>,
              `<Card variant="filled" rounded="xl" className="text-center">\n  <CardHeader>\n    <CardTitle>Título</CardTitle>\n    <CardDescription>Descrição</CardDescription>\n  </CardHeader>\n  <CardContent>\n    <p>Conteúdo informativo</p>\n  </CardContent>\n  <CardFooter align="center" className="flex-col gap-3">\n    <button>Ação Principal</button>\n    <button>Ação Secundária</button>\n  </CardFooter>\n</Card>`,
              "card-action"
            )}
          </div>
        </motion.section>
      )}

      {/* Usage Instructions */}
      <motion.div
        className="w-full max-w-4xl bg-gray-800 rounded-xl p-6 border border-cyan-500/30 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.4 },
        }}
      >
        <h2 className="text-xl font-semibold mb-4 text-cyan-400">
          Como usar os componentes de Card
        </h2>
        <p className="text-gray-300 mb-4">
          Os componentes de card são altamente personalizáveis e seguem as
          melhores práticas de design. Eles são construídos de forma modular com
          subcomponentes para header, conteúdo e footer.
        </p>
        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <code className="text-sm text-cyan-300">
            {`// Importação dos componentes de card\n`}
            {`import Card, {\n`}
            {`  CardHeader,\n`}
            {`  CardTitle,\n`}
            {`  CardDescription,\n`}
            {`  CardContent,\n`}
            {`  CardFooter,\n`}
            {`  CardImage,\n`}
            {`  CardAvatar\n`}
            {`} from "../components/cards/Cards";\n\n`}
            {`// Exemplo de uso básico\n`}
            {`<Card variant="elevated" rounded="lg">\n`}
            {`  <CardHeader>\n`}
            {`    <CardTitle>Título do Card</CardTitle>\n`}
            {`    <CardDescription>Descrição do card</CardDescription>\n`}
            {`  </CardHeader>\n`}
            {`  <CardContent>\n`}
            {`    <p>Conteúdo principal do card</p>\n`}
            {`  </CardContent>\n`}
            {`  <CardFooter>\n`}
            {`    <button>Ação</button>\n`}
            {`  </CardFooter>\n`}
            {`</Card>`}
          </code>
        </div>
      </motion.div>
    </section>
  );
}
