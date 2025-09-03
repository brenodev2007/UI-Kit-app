import { motion, type Variants } from "framer-motion";
import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/nav/breadcrumbs";
import Pagination from "../components/nav/pagination";
import Sidebar from "../components/nav/sideBar";
import Tabs from "../components/nav/tabs";
import { useState, type JSX, useEffect } from "react";
import {
  FaRegCopy,
  FaCheck,
  FaHome,
  FaBars,
  FaChartLine,
  FaCog,
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

export default function NavigationComponentsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [copied, setCopied] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("breadcrumbs");
  const [currentPage, setCurrentPage] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(true);

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

  // Dados de exemplo
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Documentação", href: "/docs" },
    { label: "Componentes", href: "/docs/components" },
    { label: "Navegação", href: "/docs/components/navigation" },
  ];

  const tabsData = [
    {
      id: "overview",
      label: "Visão Geral",
      content: (
        <div className="p-4 bg-gray-100 rounded-lg">
          Conteúdo da visão geral
        </div>
      ),
    },
    {
      id: "settings",
      label: "Configurações",
      content: (
        <div className="p-4 bg-gray-100 rounded-lg">
          Conteúdo das configurações
        </div>
      ),
    },
    {
      id: "billing",
      label: "Faturamento",
      content: (
        <div className="p-4 bg-gray-100 rounded-lg">
          Conteúdo do faturamento
        </div>
      ),
    },
  ];

  return (
    <section className="w-full min-h-screen p-4 md:p-10 flex flex-col items-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="w-full mb-8 md:mb-12">
        <Navbar />
      </div>

      {/* Intro */}
      <motion.h1
        className="text-3xl md:text-5xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      >
        Componentes de Navegação
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
        Explore todos os componentes de navegação para criar interfaces
        intuitivas.
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
          { id: "breadcrumbs", label: "Breadcrumbs", icon: <FaHome /> },
          { id: "pagination", label: "Paginação", icon: <FaBars /> },
          { id: "sidebar", label: "Sidebar", icon: <FaChartLine /> },
          { id: "tabs", label: "Abas", icon: <FaCog /> },
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

      {/* Breadcrumbs */}
      {activeTab === "breadcrumbs" && (
        <motion.section
          className="w-full max-w-6xl mb-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">Breadcrumbs</h2>

          {/* Breadcrumb Básico */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-4 text-gray-300">
              Breadcrumb Básico
            </h3>
            {renderCodeCard(
              <div className="p-4 bg-gray-900 rounded-lg">
                <Breadcrumbs
                  items={breadcrumbItems}
                  homeIcon={true}
                  className="text-sm"
                />
              </div>,
              `<Breadcrumbs\n  items={[\n    { label: "Home", href: "/" },\n    { label: "Documentação", href: "/docs" },\n    { label: "Componentes", href: "/docs/components" },\n    { label: "Navegação", href: "/docs/components/navigation" }\n  ]}\n  homeIcon={true}\n  className="text-sm"\n/>`,
              "breadcrumb-basic"
            )}
          </div>

          {/* Breadcrumb Sem Ícone Home */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-4 text-gray-300">
              Breadcrumb Sem Ícone Home
            </h3>
            {renderCodeCard(
              <div className="p-4 bg-gray-900 rounded-lg">
                <Breadcrumbs
                  items={breadcrumbItems.slice(1)}
                  homeIcon={false}
                  className="text-sm"
                />
              </div>,
              `<Breadcrumbs\n  items={[\n    { label: "Documentação", href: "/docs" },\n    { label: "Componentes", href: "/docs/components" },\n    { label: "Navegação", href: "/docs/components/navigation" }\n  ]}\n  homeIcon={false}\n  className="text-sm"\n/>`,
              "breadcrumb-no-home"
            )}
          </div>

          {/* Breadcrumb Customizado */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-300">
              Breadcrumb Customizado
            </h3>
            {renderCodeCard(
              <div className="p-4 bg-gray-900 rounded-lg">
                <Breadcrumbs
                  items={[
                    { label: "Início", href: "/" },
                    { label: "Produtos", href: "/products" },
                    { label: "Eletrônicos", href: "/products/electronics" },
                    {
                      label: "Smartphones",
                      href: "/products/electronics/smartphones",
                    },
                  ]}
                  homeIcon={true}
                  className="text-sm bg-blue-100 p-3 rounded-lg"
                />
              </div>,
              `<Breadcrumbs\n  items={[\n    { label: "Início", href: "/" },\n    { label: "Produtos", href: "/products" },\n    { label: "Eletrônicos", href: "/products/electronics" },\n    { label: "Smartphones", href: "/products/electronics/smartphones" }\n  ]}\n  homeIcon={true}\n  className="text-sm bg-blue-100 p-3 rounded-lg"\n/>`,
              "breadcrumb-custom"
            )}
          </div>
        </motion.section>
      )}

      {/* Pagination */}
      {activeTab === "pagination" && (
        <motion.section
          className="w-full max-w-6xl mb-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">Paginação</h2>

          {/* Paginação Básica */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-4 text-gray-300">
              Paginação Básica
            </h3>
            {renderCodeCard(
              <div className="p-4 bg-gray-900 rounded-lg flex justify-center">
                <Pagination
                  currentPage={currentPage}
                  totalPages={10}
                  onPageChange={setCurrentPage}
                  size="md"
                  showNumbers={true}
                  showPrevNext={true}
                />
              </div>,
              `<Pagination\n  currentPage={1}\n  totalPages={10}\n  onPageChange={(page) => setCurrentPage(page)}\n  size="md"\n  showNumbers={true}\n  showPrevNext={true}\n/>`,
              "pagination-basic"
            )}
          </div>

          {/* Paginação Minimalista */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-4 text-gray-300">
              Paginação Minimalista
            </h3>
            {renderCodeCard(
              <div className="p-4 bg-gray-900 rounded-lg flex justify-center">
                <Pagination
                  currentPage={currentPage}
                  totalPages={10}
                  onPageChange={setCurrentPage}
                  size="sm"
                  showNumbers={false}
                  showPrevNext={true}
                />
              </div>,
              `<Pagination\n  currentPage={1}\n  totalPages={10}\n  onPageChange={(page) => setCurrentPage(page)}\n  size="sm"\n  showNumbers={false}\n  showPrevNext={true}\n/>`,
              "pagination-minimal"
            )}
          </div>

          {/* Paginação Grande */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-300">
              Paginação Grande
            </h3>
            {renderCodeCard(
              <div className="p-4 bg-gray-900 rounded-lg flex justify-center">
                <Pagination
                  currentPage={currentPage}
                  totalPages={5}
                  onPageChange={setCurrentPage}
                  size="lg"
                  showNumbers={true}
                  showPrevNext={true}
                />
              </div>,
              `<Pagination\n  currentPage={1}\n  totalPages={5}\n  onPageChange={(page) => setCurrentPage(page)}\n  size="lg"\n  showNumbers={true}\n  showPrevNext={true}\n/>`,
              "pagination-large"
            )}
          </div>
        </motion.section>
      )}

      {/* Sidebar */}
      {activeTab === "sidebar" && (
        <motion.section
          className="w-full max-w-6xl mb-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">Sidebar</h2>

          {/* Sidebar Expandida */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-4 text-gray-300">
              Sidebar Expandida
            </h3>
            {renderCodeCard(
              <div className="p-4 bg-gray-900 rounded-lg h-64 overflow-hidden relative">
                <Sidebar
                  isOpen={true}
                  onToggle={() => setSidebarOpen(!sidebarOpen)}
                  className="h-full"
                />
              </div>,
              `<Sidebar\n  isOpen={true}\n  onToggle={() => setSidebarOpen(!sidebarOpen)}\n  className="h-full"\n/>`,
              "sidebar-expanded"
            )}
          </div>

          {/* Sidebar Recolhida */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-300">
              Sidebar Recolhida
            </h3>
            {renderCodeCard(
              <div className="p-4 bg-gray-900 rounded-lg h-64 overflow-hidden relative">
                <Sidebar
                  isOpen={false}
                  onToggle={() => setSidebarOpen(!sidebarOpen)}
                  className="h-full"
                />
              </div>,
              `<Sidebar\n  isOpen={false}\n  onToggle={() => setSidebarOpen(!sidebarOpen)}\n  className="h-full"\n/>`,
              "sidebar-collapsed"
            )}
          </div>
        </motion.section>
      )}

      {/* Tabs */}
      {activeTab === "tabs" && (
        <motion.section
          className="w-full max-w-6xl mb-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">Abas (Tabs)</h2>

          {/* Abas Padrão */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-4 text-gray-300">
              Abas Padrão
            </h3>
            {renderCodeCard(
              <div className="p-4 bg-gray-900 rounded-lg">
                <Tabs
                  tabs={tabsData}
                  variant="default"
                  size="md"
                  className="bg-white p-4 rounded-lg"
                />
              </div>,
              `<Tabs\n  tabs={[\n    {\n      id: "overview",\n      label: "Visão Geral",\n      content: <div>Conteúdo da visão geral</div>\n    },\n    {\n      id: "settings",\n      label: "Configurações",\n      content: <div>Conteúdo das configurações</div>\n    },\n    {\n      id: "billing",\n      label: "Faturamento",\n      content: <div>Conteúdo do faturamento</div>\n    }\n  ]}\n  variant="default"\n  size="md"\n  className="bg-white p-4 rounded-lg"\n/>`,
              "tabs-default"
            )}
          </div>

          {/* Abas em Pílulas */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-4 text-gray-300">
              Abas em Pílulas
            </h3>
            {renderCodeCard(
              <div className="p-4 bg-gray-900 rounded-lg">
                <Tabs
                  tabs={tabsData}
                  variant="pills"
                  size="md"
                  className="bg-white p-4 rounded-lg"
                />
              </div>,
              `<Tabs\n  tabs={[\n    {\n      id: "overview",\n      label: "Visão Geral",\n      content: <div>Conteúdo da visão geral</div>\n    },\n    {\n      id: "settings",\n      label: "Configurações",\n      content: <div>Conteúdo das configurações</div>\n    },\n    {\n      id: "billing",\n      label: "Faturamento",\n      content: <div>Conteúdo do faturamento</div>\n    }\n  ]}\n  variant="pills"\n  size="md"\n  className="bg-white p-4 rounded-lg"\n/>`,
              "tabs-pills"
            )}
          </div>

          {/* Abas com Underline */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-300">
              Abas com Underline
            </h3>
            {renderCodeCard(
              <div className="p-4 bg-gray-900 rounded-lg">
                <Tabs
                  tabs={tabsData}
                  variant="underline"
                  size="md"
                  className="bg-white p-4 rounded-lg"
                />
              </div>,
              `<Tabs\n  tabs={[\n    {\n      id: "overview",\n      label: "Visão Geral",\n      content: <div>Conteúdo da visão geral</div>\n    },\n    {\n      id: "settings",\n      label: "Configurações",\n      content: <div>Conteúdo das configurações</div>\n    },\n    {\n      id: "billing",\n      label: "Faturamento",\n      content: <div>Conteúdo do faturamento</div>\n    }\n  ]}\n  variant="underline"\n  size="md"\n  className="bg-white p-4 rounded-lg"\n/>`,
              "tabs-underline"
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
          Como usar os componentes de Navegação
        </h2>
        <p className="text-gray-300 mb-4">
          Os componentes de navegação são essenciais para criar interfaces
          intuitivas e fáceis de usar. Eles ajudam os usuários a se orientarem
          dentro da aplicação e acessarem diferentes seções.
        </p>
        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <code className="text-sm text-cyan-300">
            {`// Importação dos componentes de navegação\n`}
            {`import Breadcrumbs from "../components/navigation/breadcrumbs";\n`}
            {`import Pagination from "../components/navigation/pagination";\n`}
            {`import Sidebar from "../components/navigation/sidebar";\n`}
            {`import Tabs from "../components/navigation/tabs";\n\n`}
            {`// Exemplo de uso do Breadcrumb\n`}
            {`<Breadcrumbs\n`}
            {`  items={[\n`}
            {`    { label: "Home", href: "/" },\n`}
            {`    { label: "Produtos", href: "/products" }\n`}
            {`  ]}\n`}
            {`  homeIcon={true}\n`}
            {`/>\n\n`}
            {`// Exemplo de uso da Paginação\n`}
            {`<Pagination\n`}
            {`  currentPage={1}\n`}
            {`  totalPages={10}\n`}
            {`  onPageChange={(page) => setCurrentPage(page)}\n`}
            {`  size="md"\n`}
            {`/>`}
          </code>
        </div>
      </motion.div>
    </section>
  );
}
