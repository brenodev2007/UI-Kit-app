import { motion, type Variants } from "framer-motion";
import Button from "../components/button/Button";
import ButtonIcon from "../components/button/ButtonIcon";
import { FaCoffee, FaCheck, FaTrash, FaCopy, FaEye } from "react-icons/fa";
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
    scale: 1.02,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5)",
    transition: { type: "spring", stiffness: 300, damping: 20 },
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
  ] as const;
  const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
  const roundeds = ["none", "sm", "md", "lg", "full"] as const;
  const shadows = ["none", "sm", "md", "lg", "xl"] as const;

  const [copied, setCopied] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("variants");

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 1500);
  };

  const renderCodeCard = (
    buttonElement: JSX.Element,
    codeText: string,
    type: string
  ) => (
    <motion.div
      className="bg-gray-800 p-6 rounded-xl border border-gray-700 flex flex-col items-center gap-4 relative min-h-[120px]"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      {buttonElement}
      <div className="w-full relative mt-2 flex flex-col items-center">
        <code className="text-xs bg-gray-900 p-2 rounded w-full text-center block overflow-x-auto">
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
            <FaCopy />
          )}
        </button>
      </div>
    </motion.div>
  );

  return (
    <section className="w-full min-h-screen p-4 md:p-10 flex flex-col items-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navbar */}
      <div className="w-full mb-8 md:mb-12">
        <Navbar />
      </div>

      {/* Intro */}
      <motion.h1
        className="text-3xl md:text-5xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      >
        Componentes de Botão
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
        Explore todos os estilos, tamanhos e variações de botões.
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
          { id: "variants", label: "Variantes" },
          { id: "sizes", label: "Tamanhos" },
          { id: "rounded", label: "Arredondamento" },
          { id: "shadows", label: "Sombras" },
          { id: "icons", label: "Com Ícones" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === tab.id
                ? "bg-cyan-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </motion.div>

      {/* Variants */}
      {activeTab === "variants" && (
        <motion.section
          className="w-full max-w-6xl mb-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">Variantes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {variants.map((v) =>
              renderCodeCard(
                <Button variant={v as any} className="w-full justify-center">
                  {v.charAt(0).toUpperCase() + v.slice(1)}
                </Button>,
                `<Button variant="${v}">${
                  v.charAt(0).toUpperCase() + v.slice(1)
                }</Button>`,
                `variant-${v}`
              )
            )}
          </div>
        </motion.section>
      )}

      {/* Sizes */}
      {activeTab === "sizes" && (
        <motion.section
          className="w-full max-w-6xl mb-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">Tamanhos</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {sizes.map((s) =>
              renderCodeCard(
                <Button size={s as any}>{s.toUpperCase()}</Button>,
                `<Button size="${s}">Texto</Button>`,
                `size-${s}`
              )
            )}
          </div>
        </motion.section>
      )}

      {/* Rounded */}
      {activeTab === "rounded" && (
        <motion.section
          className="w-full max-w-6xl mb-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">
            Arredondamento
          </h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {roundeds.map((r) =>
              renderCodeCard(
                <Button rounded={r as any}>{r}</Button>,
                `<Button rounded="${r}">Texto</Button>`,
                `rounded-${r}`
              )
            )}
          </div>
        </motion.section>
      )}

      {/* Shadows */}
      {activeTab === "shadows" && (
        <motion.section
          className="w-full max-w-6xl mb-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">Sombras</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {shadows.map((s) =>
              renderCodeCard(
                <Button shadow={s as any}>{s}</Button>,
                `<Button shadow="${s}">Texto</Button>`,
                `shadow-${s}`
              )
            )}
          </div>
        </motion.section>
      )}

      {/* Button with Icon */}
      {activeTab === "icons" && (
        <motion.section
          className="w-full max-w-6xl mb-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">
            Botões com Ícones
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {renderCodeCard(
              <ButtonIcon text="Coffee" icon={<FaCoffee />} />,
              `<ButtonIcon text="Coffee" icon={<FaCoffee />} />`,
              "icon-coffee"
            )}
            {renderCodeCard(
              <ButtonIcon text="Confirm" icon={<FaCheck />} variant="ghost" />,
              `<ButtonIcon text="Confirm" icon={<FaCheck />} variant="ghost" />`,
              "icon-confirm"
            )}
            {renderCodeCard(
              <ButtonIcon
                icon={<FaTrash />}
                ariaLabel="Delete"
                variant="danger"
              />,
              `<ButtonIcon icon={<FaTrash />} ariaLabel="Delete" variant="danger" />`,
              "icon-delete"
            )}
            {renderCodeCard(
              <ButtonIcon
                text="Preview"
                icon={<FaEye />}
                variant="outline"
                size="lg"
              />,
              `<ButtonIcon text="Preview" icon={<FaEye />} variant="outline" size="lg" />`,
              "icon-preview"
            )}
            {renderCodeCard(
              <Button
                icon={<FaCheck />}
                variant="primary"
                className="justify-center"
              >
                With Icon
              </Button>,
              `<Button icon={<FaCheck />}>With Icon</Button>`,
              "button-with-icon"
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
          Como usar os botões
        </h2>
        <p className="text-gray-300 mb-4">
          Todos os botões são altamente personalizáveis e seguem as melhores
          práticas de acessibilidade. Basta copiar o código do botão desejado e
          importá-lo em seu projeto.
        </p>
        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <code className="text-sm text-cyan-300">
            {`// Importação dos componentes de botão\n`}
            {`import Button from "../components/button/Button";\n`}
            {`import ButtonIcon from "../components/button/ButtonIcon";\n\n`}
            {`// Exemplo de uso\n`}
            {`<Button variant="primary" size="md" rounded="md">\n`}
            {`  Clique aqui\n`}
            {`</Button>\n\n`}
            {`<ButtonIcon text="Ação" icon={<FaIcon />} variant="secondary" />`}
          </code>
        </div>
      </motion.div>
    </section>
  );
}
