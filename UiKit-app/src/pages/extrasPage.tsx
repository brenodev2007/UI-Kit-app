import { motion, type Variants } from "framer-motion";
import Navbar from "../components/Navbar";
import { Avatar } from "../components/extras/avatar";
import Loader from "../components/extras/loader";
import { useState, type JSX, useEffect } from "react";
import { FaRegCopy, FaCheck, FaUser, FaSpinner } from "react-icons/fa";

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

export default function ExtrasPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [copied, setCopied] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("avatars");

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 1500);
  };

  const renderCodeCard = (element: JSX.Element, code: string, type: string) => (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="flex flex-col items-center w-full bg-gray-800 p-6 rounded-xl border border-gray-700"
    >
      {element}
      <div className="w-full relative mt-4">
        <code className="text-xs bg-gray-900 px-4 py-2 rounded w-full block text-center overflow-x-auto">
          {code}
        </code>
        <button
          onClick={() => handleCopy(code, type)}
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

  return (
    <section className="w-full min-h-screen p-4 md:p-10 flex flex-col items-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="w-full mb-8 md:mb-12">
        <Navbar />
      </div>

      {/* Intro */}
      <motion.h1
        className="text-3xl md:text-5xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      >
        Componentes Extras
      </motion.h1>
      <motion.p
        className="text-purple-300 text-base md:text-lg mb-8 md:mb-12 max-w-3xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, delay: 0.2 },
        }}
      >
        Teste e copie o código de Avatars, Loaders e outros componentes extras
        interativos.
      </motion.p>

      {/* Tabs de Navegação */}
      <motion.div
        className="flex flex-wrap gap-2 mb-8 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.3 } }}
      >
        {[
          { id: "avatars", label: "Avatars", icon: <FaUser /> },
          { id: "loaders", label: "Loaders", icon: <FaSpinner /> },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-md transition-colors flex items-center gap-2 ${
              activeTab === tab.id
                ? "bg-purple-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </motion.div>

      {/* Avatars */}
      {activeTab === "avatars" && (
        <motion.section
          className="w-full max-w-6xl mb-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold mb-6 text-purple-400">Avatars</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center">
            {renderCodeCard(
              <div className="flex flex-col items-center gap-4">
                <div className="relative">
                  <Avatar name="Alice" size="sm" />
                  <span
                    className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-slate-900 rounded-full"
                    title="Online"
                  />
                </div>
                <span className="text-sm text-gray-400">Pequeno - Online</span>
              </div>,
              `<Avatar name="Alice" size="sm" />`,
              "avatar-sm"
            )}

            {renderCodeCard(
              <div className="flex flex-col items-center gap-4">
                <div className="relative">
                  <Avatar name="Bob" size="md" rounded="lg" />
                  <span
                    className="absolute bottom-0 right-0 w-3 h-3 bg-yellow-400 border-2 border-slate-900 rounded-full"
                    title="Ausente"
                  />
                </div>
                <span className="text-sm text-gray-400">Médio - Ausente</span>
              </div>,
              `<Avatar name="Bob" size="md" rounded="lg" />`,
              "avatar-md"
            )}

            {renderCodeCard(
              <div className="flex flex-col items-center gap-4">
                <div className="relative">
                  <Avatar name="Charlie" size="lg" rounded="full" />
                  <span
                    className="absolute bottom-0 right-0 w-3 h-3 bg-red-500 border-2 border-slate-900 rounded-full"
                    title="Ocupado"
                  />
                </div>
                <span className="text-sm text-gray-400">Grande - Ocupado</span>
              </div>,
              `<Avatar name="Charlie" size="lg" rounded="full"/>`,
              "avatar-lg"
            )}

            {renderCodeCard(
              <div className="flex flex-col items-center gap-4">
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
                </div>
                <span className="text-sm text-gray-400">
                  Extra Grande - Online
                </span>
              </div>,
              `<Avatar src="https://i.pravatar.cc/150?img=5" name="Jane" size="lg" />`,
              "avatar-xl"
            )}

            {renderCodeCard(
              <div className="flex flex-col items-center gap-4">
                <Avatar name="Sem Foto" size="md" />
                <span className="text-sm text-gray-400">Iniciais</span>
              </div>,
              `<Avatar name="Sem Foto" size="md" />`,
              "avatar-initials"
            )}

            {renderCodeCard(
              <div className="flex flex-col items-center gap-4">
                <Avatar
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  name="John Doe"
                  size="lg"
                  rounded="full"
                />
                <span className="text-sm text-gray-400">
                  Imagem customizada
                </span>
              </div>,
              `<Avatar \n  src="https://example.com/photo.jpg" \n  name="John Doe" \n  size="lg" \n  rounded="full"\n/>`,
              "avatar-custom"
            )}
          </div>
        </motion.section>
      )}

      {/* Loaders */}
      {activeTab === "loaders" && (
        <motion.section
          className="w-full max-w-6xl mb-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold mb-6 text-green-400">Loaders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center">
            {renderCodeCard(
              <div className="flex flex-col items-center gap-4">
                <Loader variant="spinner" size="sm" color="#3b82f6" />
                <span className="text-sm text-gray-400">Spinner Pequeno</span>
              </div>,
              `<Loader variant="spinner" size="sm" color="#3b82f6" />`,
              "loader-spinner-sm"
            )}

            {renderCodeCard(
              <div className="flex flex-col items-center gap-4">
                <Loader variant="dots" size="md" color="#ec4899" />
                <span className="text-sm text-gray-400">Dots Médio</span>
              </div>,
              `<Loader variant="dots" size="md" color="#ec4899" />`,
              "loader-dots-md"
            )}

            {renderCodeCard(
              <div className="flex flex-col items-center gap-4">
                <Loader variant="pulse" size="lg" color="#22c55e" />
                <span className="text-sm text-gray-400">Pulse Grande</span>
              </div>,
              `<Loader variant="pulse" size="lg" color="#22c55e" />`,
              "loader-pulse-lg"
            )}

            {renderCodeCard(
              <div className="flex flex-col items-center gap-4">
                <Loader variant="dots" size="lg" color="#8b5cf6" />
                <span className="text-sm text-gray-400">Dots Roxo</span>
              </div>,
              `<Loader variant="dots" size="lg" color="#8b5cf6" />`,
              "loader-dots-purple"
            )}

            {renderCodeCard(
              <div className="flex flex-col items-center gap-4">
                <Loader variant="pulse" size="md" color="#ef4444" />
                <span className="text-sm text-gray-400">Pulse Vermelho</span>
              </div>,
              `<Loader variant="pulse" size="md" color="#ef4444" />`,
              "loader-pulse-red"
            )}
          </div>
        </motion.section>
      )}

      {/* Usage Instructions */}
      <motion.div
        className="w-full max-w-4xl bg-gray-800 rounded-xl p-6 border border-purple-500/30 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.4 },
        }}
      >
        <h2 className="text-xl font-semibold mb-4 text-purple-400">
          Como usar os componentes Extras
        </h2>
        <p className="text-gray-300 mb-4">
          Os componentes extras incluem avatars e loaders altamente
          personalizáveis. Eles são projetados para serem facilmente integrados
          em qualquer projeto.
        </p>
        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <code className="text-sm text-purple-300">
            {`// Importação dos componentes extras\n`}
            {`import { Avatar } from "../components/extras/avatar";\n`}
            {`import Loader from "../components/extras/loader";\n\n`}
            {`// Exemplo de uso do Avatar\n`}
            {`<Avatar \n`}
            {`  name="João Silva" \n`}
            {`  size="md" \n`}
            {`  rounded="full" \n`}
            {`  src="https://exemplo.com/foto.jpg" \n`}
            {`/>\n\n`}
            {`// Exemplo de uso do Loader\n`}
            {`<Loader \n`}
            {`  variant="spinner" \n`}
            {`  size="lg" \n`}
            {`  color="#3b82f6" \n`}
            {`/>`}
          </code>
        </div>
      </motion.div>
    </section>
  );
}
