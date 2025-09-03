import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Navbar from "../components/Navbar";
import Alert, { type AlertVariant } from "../components/feedbacks/alert";
import Toast, { type ToastVariant } from "../components/feedbacks/toast";
import Button from "../components/button/Button";

import {
  FiCopy,
  FiCheck,
  FiX,
  FiAlertCircle,
  FiInfo,
  FiCheckCircle,
  FiAlertTriangle,
} from "react-icons/fi";

// Tamanhos do modal
const sizeStyles = {
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
  full: "max-w-full h-full rounded-none",
};

// Variants para animação
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: {
    scale: 1.03,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5)",
    transition: { type: "spring", stiffness: 250, damping: 20 },
  },
};

// Ícones para cada tipo de alerta
const alertIcons = {
  success: <FiCheckCircle className="w-5 h-5" />,
  error: <FiAlertCircle className="w-5 h-5" />,
  warning: <FiAlertTriangle className="w-5 h-5" />,
  info: <FiInfo className="w-5 h-5" />,
};

export default function FeedbackPlayground() {
  const [alertProps, setAlertProps] = useState<{
    variant: AlertVariant;
    title: string;
    message: string;
    dismissible: boolean;
  }>({
    variant: "success",
    title: "Alerta!",
    message: "Esta é uma mensagem de alerta.",
    dismissible: true,
  });

  const [toastProps, setToastProps] = useState<{
    variant: ToastVariant;
    title: string;
    message: string;
    duration: number;
    show: boolean;
  }>({
    variant: "info",
    title: "Toast Exemplo",
    message: "Mensagem de toast.",
    duration: 4000,
    show: false,
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalSize, setModalSize] = useState<
    "sm" | "md" | "lg" | "xl" | "full"
  >("md");
  const [formData, setFormData] = useState({ name: "", email: "" });

  const [copied, setCopied] = useState<"alert" | "toast" | "modal" | null>(
    null
  );
  const [successClick, setSuccessClick] = useState(false);

  // Copiar código
  const copyCode = (code: string, type: "alert" | "toast" | "modal") => {
    navigator.clipboard.writeText(code);
    setCopied(type);
    setTimeout(() => setCopied(null), 1500);
  };

  // Botão de sucesso animado
  const handleSuccessClick = () => {
    setSuccessClick(true);
    setToastProps((prev) => ({ ...prev, show: true }));
    setTimeout(() => setSuccessClick(false), 300);
  };

  // Submeter formulário do modal
  const handleSubmit = () => {
    console.log("Modal enviado:", formData);
    setModalOpen(false);
    setFormData({ name: "", email: "" });
  };

  // Gerar código do Alert
  const generateAlertCode = () => {
    return `<Alert 
  variant="${alertProps.variant}" 
  title="${alertProps.title}" 
  message="${alertProps.message}" 
  dismissible={${alertProps.dismissible}} 
/>`;
  };

  // Gerar código do Toast
  const generateToastCode = () => {
    return `<Toast 
  variant="${toastProps.variant}" 
  title="${toastProps.title}" 
  message="${toastProps.message}" 
  duration={${toastProps.duration}} 
  onClose={() => setShowToast(false)} 
/>`;
  };

  // Gerar código do Modal
  const generateModalCode = () => {
    return `const [isModalOpen, setIsModalOpen] = useState(false);

<Modal 
  isOpen={isModalOpen} 
  onClose={() => setIsModalOpen(false)} 
  title="Enviar Feedback" 
  size="${modalSize}"
>
  <div className="p-6 flex flex-col gap-4">
    <input
      type="text"
      placeholder="Nome"
      className="px-3 py-2 rounded-md bg-gray-900 border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
    />
    <input
      type="email"
      placeholder="Email"
      className="px-3 py-2 rounded-md bg-gray-900 border border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
    />
    <Button variant="primary" onClick={handleSubmit}>
      Enviar
    </Button>
  </div>
</Modal>`;
  };

  return (
    <section className="w-full min-h-screen p-4 md:p-10 flex flex-col items-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="w-full mb-8 md:mb-12">
        <Navbar />
      </div>

      <motion.h1
        className="text-3xl md:text-5xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      >
        Feedback Playground
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
        Personalize Alert, Toast e Modal em tempo real e copie o código!
      </motion.p>

      {/* Controles */}
      <motion.div
        className="w-full max-w-5xl flex flex-wrap gap-4 md:gap-6 justify-center mb-8 md:mb-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {/* Alert Variant */}
        <motion.div
          className="flex flex-col w-full sm:w-48"
          variants={cardVariants}
        >
          <label className="mb-1 text-white text-sm flex items-center gap-1">
            {alertIcons[alertProps.variant]}
            Tipo de Alert
          </label>
          <select
            className="px-3 py-2 rounded-md bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            value={alertProps.variant}
            onChange={(e) =>
              setAlertProps((prev) => ({
                ...prev,
                variant: e.target.value as AlertVariant,
              }))
            }
          >
            <option className="bg-gray-900" value="success">
              Success
            </option>
            <option className="bg-gray-900" value="error">
              Error
            </option>
            <option className="bg-gray-900" value="warning">
              Warning
            </option>
            <option className="bg-gray-900" value="info">
              Info
            </option>
          </select>
        </motion.div>

        {/* Alert Title */}
        <motion.div
          className="flex flex-col w-full sm:w-48"
          variants={cardVariants}
        >
          <label className="mb-1 text-white text-sm">Título</label>
          <input
            type="text"
            placeholder="Título do Alert"
            className="px-3 py-2 rounded-md bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            value={alertProps.title}
            onChange={(e) =>
              setAlertProps({ ...alertProps, title: e.target.value })
            }
          />
        </motion.div>

        {/* Alert Message */}
        <motion.div
          className="flex flex-col w-full sm:w-64"
          variants={cardVariants}
        >
          <label className="mb-1 text-white text-sm">Mensagem</label>
          <input
            type="text"
            placeholder="Mensagem do Alert"
            className="px-3 py-2 rounded-md bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            value={alertProps.message}
            onChange={(e) =>
              setAlertProps({ ...alertProps, message: e.target.value })
            }
          />
        </motion.div>

        {/* Dismissible Toggle */}
        <motion.div
          className="flex flex-col w-full sm:w-48"
          variants={cardVariants}
        >
          <label className="mb-1 text-white text-sm">Fechável</label>
          <div className="flex items-center h-10">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={alertProps.dismissible}
                onChange={(e) =>
                  setAlertProps({
                    ...alertProps,
                    dismissible: e.target.checked,
                  })
                }
              />
              <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-500"></div>
            </label>
          </div>
        </motion.div>

        {/* Modal Size */}
        <motion.div
          className="flex flex-col w-full sm:w-48"
          variants={cardVariants}
        >
          <label className="mb-1 text-white text-sm">Tamanho do Modal</label>
          <select
            className="px-3 py-2 rounded-md bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            value={modalSize}
            onChange={(e) => setModalSize(e.target.value as any)}
          >
            <option className="bg-gray-900" value="sm">
              Pequeno
            </option>
            <option className="bg-gray-900" value="md">
              Médio
            </option>
            <option className="bg-gray-900" value="lg">
              Grande
            </option>
            <option className="bg-gray-900" value="xl">
              XL
            </option>
            <option className="bg-gray-900" value="full">
              Full
            </option>
          </select>
        </motion.div>

        {/* Botões */}
        <motion.div variants={cardVariants} className="flex items-end">
          <motion.div
            animate={successClick ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 0.3 }}
          >
            <Button variant="primary" onClick={handleSuccessClick}>
              Mostrar Toast
            </Button>
          </motion.div>
        </motion.div>

        <motion.div variants={cardVariants} className="flex items-end">
          <Button variant="outline" onClick={() => setModalOpen(true)}>
            Abrir Modal
          </Button>
        </motion.div>
      </motion.div>

      {/* Preview Cards */}
      <motion.div className="w-full max-w-5xl grid sm:grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Alert Card */}
        <motion.div
          className="bg-gray-800 rounded-xl p-6 flex flex-col items-center shadow-lg border border-gray-700"
          variants={cardVariants}
          whileHover="hover"
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            {alertIcons[alertProps.variant]}
            Alert Preview
          </h2>
          <div className="w-full">
            <Alert {...alertProps} />
          </div>
          <button
            className="mt-4 flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-sm text-white transition-all"
            onClick={() => copyCode(generateAlertCode(), "alert")}
          >
            {copied === "alert" ? (
              <FiCheck className="text-green-400" />
            ) : (
              <FiCopy />
            )}
            {copied === "alert" ? "Copiado!" : "Copiar código"}
          </button>
        </motion.div>

        {/* Toast Card */}
        <motion.div
          className="bg-gray-800 rounded-xl p-6 flex flex-col items-center shadow-lg border border-gray-700"
          variants={cardVariants}
          whileHover="hover"
        >
          <h2 className="text-xl font-semibold mb-4">Toast Preview</h2>
          <Button
            variant="primary"
            onClick={() => setToastProps({ ...toastProps, show: true })}
          >
            Mostrar Toast
          </Button>
          <button
            className="mt-4 flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-sm text-white transition-all"
            onClick={() => copyCode(generateToastCode(), "toast")}
          >
            {copied === "toast" ? (
              <FiCheck className="text-green-400" />
            ) : (
              <FiCopy />
            )}
            {copied === "toast" ? "Copiado!" : "Copiar código"}
          </button>
        </motion.div>

        {/* Modal Card */}
        <motion.div
          className="bg-gray-800 rounded-xl p-6 flex flex-col items-center shadow-lg border border-gray-700"
          variants={cardVariants}
          whileHover="hover"
        >
          <h2 className="text-xl font-semibold mb-4">Modal Preview</h2>
          <Button variant="primary" onClick={() => setModalOpen(true)}>
            Abrir Modal
          </Button>
          <button
            className="mt-4 flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-sm text-white transition-all"
            onClick={() => copyCode(generateModalCode(), "modal")}
          >
            {copied === "modal" ? (
              <FiCheck className="text-green-400" />
            ) : (
              <FiCopy />
            )}
            {copied === "modal" ? "Copiado!" : "Copiar código"}
          </button>
        </motion.div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}
          >
            <motion.div
              className={`bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full ${sizeStyles[modalSize]} border-2 border-pink-400`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Enviar Feedback
                </h2>
                <button
                  onClick={() => setModalOpen(false)}
                  className="p-2 text-gray-400 rounded-md hover:text-gray-600 hover:bg-gray-100 dark:hover:text-gray-200 dark:hover:bg-gray-800 transition-colors"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              {/* Form */}
              <div className="p-6 flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Nome"
                  className="px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <Button variant="primary" onClick={handleSubmit}>
                  Enviar
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast */}
      {toastProps.show && (
        <Toast
          variant={toastProps.variant}
          title={toastProps.title}
          message={toastProps.message}
          duration={toastProps.duration}
          onClose={() => setToastProps({ ...toastProps, show: false })}
        />
      )}
    </section>
  );
}
