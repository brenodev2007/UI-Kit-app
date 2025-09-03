import { motion, type Variants } from "framer-motion";
import Navbar from "../components/Navbar";
import { BasicTable } from "../components/list/basicTable";
import { PaginatedTable } from "../components/list/pageTable";
import { SimpleList, IconList } from "../components/list/simpleList";
import { useState, type JSX, useEffect } from "react";
import {
  FaRegCopy,
  FaCheck,
  FaList,
  FaTable,
  FaUser,
  FaStar,
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

export default function ListComponentsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [copied, setCopied] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("tables");

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

  // Dados de exemplo para as tabelas
  const tableHeaders = ["Nome", "Email", "Cargo", "Status"];
  const tableData = [
    ["João Silva", "joao@email.com", "Desenvolvedor", "Ativo"],
    ["Maria Santos", "maria@email.com", "Designer", "Ativo"],
    ["Pedro Costa", "pedro@email.com", "Gerente", "Inativo"],
    ["Ana Oliveira", "ana@email.com", "Analista", "Ativo"],
    ["Carlos Lima", "carlos@email.com", "Desenvolvedor", "Ativo"],
    ["Juliana Pereira", "juliana@email.com", "Designer", "Inativo"],
    ["Ricardo Alves", "ricardo@email.com", "Gerente", "Ativo"],
    ["Fernanda Souza", "fernanda@email.com", "Analista", "Ativo"],
  ];

  // Dados de exemplo para as listas
  const listItems = [
    "Configurações de perfil",
    "Preferências de notificação",
    "Privacidade e segurança",
    "Gerenciamento de conta",
    "Preferências de idioma",
    "Configurações de acessibilidade",
    "Histórico de atividades",
    "Conexões de aplicativos",
  ];

  return (
    <section className="w-full min-h-screen p-4 md:p-10 flex flex-col items-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="w-full mb-8 md:mb-12">
        <Navbar />
      </div>

      {/* Intro */}
      <motion.h1
        className="text-3xl md:text-5xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      >
        Componentes de Lista
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
        Explore todos os estilos de tabelas e listas para organizar e exibir
        dados.
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
          { id: "tables", label: "Tabelas", icon: <FaTable /> },
          { id: "lists", label: "Listas", icon: <FaList /> },
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

      {/* Tabelas */}
      {activeTab === "tables" && (
        <motion.section
          className="w-full max-w-6xl mb-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold mb-6 text-indigo-400">Tabelas</h2>

          {/* Tabela Básica */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-4 text-gray-500">
              Tabela Básica
            </h3>
            {renderCodeCard(
              <div className="overflow-hidden rounded-lg shadow-md ">
                <BasicTable
                  headers={tableHeaders}
                  data={tableData.slice(0, 4)}
                  theme="elegant"
                  striped={true}
                  hoverEffect={true}
                  border={true}
                  rounded={true}
                  compact={false}
                />
              </div>,
              `<BasicTable\n  headers={["Nome", "Email", "Cargo", "Status"]}\n  data={[\n    ["João Silva", "joao@email.com", "Desenvolvedor", "Ativo"],\n    ["Maria Santos", "maria@email.com", "Designer", "Ativo"],\n    // ... mais dados\n  ]}\n  theme="default"\n  striped={true}\n  hoverEffect={true}\n/>`,
              "table-basic"
            )}
          </div>

          {/* Tabela com Paginação */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-4 text-gray-500">
              Tabela com Paginação
            </h3>
            {renderCodeCard(
              <div className="overflow-hidden rounded-lg shadow-md">
                <PaginatedTable
                  headers={tableHeaders}
                  data={tableData}
                  rowsPerPage={3}
                  theme="minimal"
                  striped={true}
                  hoverEffect={true}
                  paginationVariant="default"
                  paginationPosition="center"
                />
              </div>,
              `<PaginatedTable\n  headers={["Nome", "Email", "Cargo", "Status"]}\n  data={[\n    ["João Silva", "joao@email.com", "Desenvolvedor", "Ativo"],\n    ["Maria Santos", "maria@email.com", "Designer", "Ativo"],\n    // ... mais dados\n  ]}\n  rowsPerPage={5}\n  theme="default"\n  striped={true}\n  hoverEffect={true}\n/>`,
              "table-paginated"
            )}
          </div>

          {/* Tabela com Tema Escuro */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-4 text-gray-300">
              Tabela com Tema Escuro
            </h3>
            {renderCodeCard(
              <div className="overflow-hidden rounded-lg shadow-md">
                <BasicTable
                  headers={tableHeaders}
                  data={tableData.slice(0, 3)}
                  theme="dark"
                  striped={true}
                  hoverEffect={true}
                  border={true}
                  rounded={true}
                />
              </div>,
              `<BasicTable\n  headers={["Nome", "Email", "Cargo", "Status"]}\n  data={[\n    ["João Silva", "joao@email.com", "Desenvolvedor", "Ativo"],\n    ["Maria Santos", "maria@email.com", "Designer", "Ativo"],\n    // ... mais dados\n  ]}\n  theme="dark"\n  striped={true}\n  hoverEffect={true}\n/>`,
              "table-dark"
            )}
          </div>

          {/* Tabela Elegante */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-300">
              Tabela Elegante
            </h3>
            {renderCodeCard(
              <div className="overflow-hidden rounded-lg shadow-md">
                <BasicTable
                  headers={tableHeaders}
                  data={tableData.slice(0, 3)}
                  theme="elegant"
                  striped={true}
                  hoverEffect={true}
                  border={false}
                  rounded={true}
                />
              </div>,
              `<BasicTable\n  headers={["Nome", "Email", "Cargo", "Status"]}\n  data={[\n    ["João Silva", "joao@email.com", "Desenvolvedor", "Ativo"],\n    ["Maria Santos", "maria@email.com", "Designer", "Ativo"],\n    // ... mais dados\n  ]}\n  theme="elegant"\n  striped={true}\n  hoverEffect={true}\n  border={false}\n/>`,
              "table-elegant"
            )}
          </div>
        </motion.section>
      )}

      {/* Listas */}
      {activeTab === "lists" && (
        <motion.section
          className="w-full max-w-6xl mb-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold mb-6 text-indigo-400">Listas</h2>

          {/* Lista Simples */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-4 text-gray-300">
              Lista Simples
            </h3>
            {renderCodeCard(
              <div className="p-4 bg-gray-900 rounded-lg">
                <SimpleList
                  items={listItems.slice(0, 4)}
                  bullet="disc"
                  bulletColor="text-purple-400"
                  spacing="gap-2"
                />
              </div>,
              `<SimpleList\n  items={[\n    "Configurações de perfil",\n    "Preferências de notificação",\n    // ... mais itens\n  ]}\n  bullet="disc"\n  bulletColor="text-purple-400"\n  spacing="gap-2"\n/>`,
              "list-simple"
            )}
          </div>

          {/* Lista Numerada */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-4 text-gray-300">
              Lista Numerada
            </h3>
            {renderCodeCard(
              <div className="p-4 bg-gray-900 rounded-lg">
                <SimpleList
                  items={listItems.slice(0, 4)}
                  bullet="decimal"
                  bulletColor="text-blue-400"
                  spacing="gap-2"
                />
              </div>,
              `<SimpleList\n  items={[\n    "Configurações de perfil",\n    "Preferências de notificação",\n    // ... mais itens\n  ]}\n  bullet="decimal"\n  bulletColor="text-blue-400"\n  spacing="gap-2"\n/>`,
              "list-numbered"
            )}
          </div>

          {/* Lista com Ícones */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-4 text-gray-300">
              Lista com Ícones
            </h3>
            {renderCodeCard(
              <div className="p-4 bg-gray-900 rounded-lg">
                <IconList
                  items={listItems.slice(0, 4)}
                  icon={<FaUser className="w-3 h-3" />}
                  iconPosition="left"
                  iconColor="text-white"
                  iconBackground="bg-indigo-500"
                  spacing="gap-3"
                />
              </div>,
              `<IconList\n  items={[\n    "Configurações de perfil",\n    "Preferências de notificação",\n    // ... mais itens\n  ]}\n  icon={<FaUser className="w-3 h-3" />}\n  iconPosition="left"\n  iconColor="text-white"\n  iconBackground="bg-indigo-500"\n  spacing="gap-3"\n/>`,
              "list-icon"
            )}
          </div>

          {/* Lista com Ícones Coloridos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-300">
              Lista com Ícones Coloridos
            </h3>
            {renderCodeCard(
              <div className="p-4 bg-gray-900 rounded-lg">
                <IconList
                  items={[
                    "Perfil do usuário",
                    "Mensagens e notificações",
                    "Eventos e calendário",
                    "Itens favoritos",
                  ]}
                  icon={<FaStar className="w-3 h-3" />}
                  iconPosition="left"
                  iconColor="text-white"
                  iconBackground="bg-yellow-500"
                  spacing="gap-3"
                />
              </div>,
              `<IconList\n  items={[\n    "Perfil do usuário",\n    "Mensagens e notificações",\n    // ... mais itens\n  ]}\n  icon={<FaStar className="w-3 h-3" />}\n  iconPosition="left"\n  iconColor="text-white"\n  iconBackground="bg-yellow-500"\n  spacing="gap-3"\n/>`,
              "list-icon-colored"
            )}
          </div>
        </motion.section>
      )}

      {/* Usage Instructions */}
      <motion.div
        className="w-full max-w-4xl bg-gray-800 rounded-xl p-6 border border-indigo-500/30 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.4 },
        }}
      >
        <h2 className="text-xl font-semibold mb-4 text-indigo-400">
          Como usar os componentes de Lista
        </h2>
        <p className="text-gray-300 mb-4">
          Os componentes de lista incluem tabelas e listas altamente
          personalizáveis. Eles são projetados para organizar e exibir dados de
          forma clara e eficiente.
        </p>
        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <code className="text-sm text-indigo-300">
            {`// Importação dos componentes de lista\n`}
            {`import { BasicTable, PaginatedTable } from "../components/list/basicTable";\n`}
            {`import { SimpleList, IconList } from "../components/list/simpleList";\n\n`}
            {`// Exemplo de uso da tabela\n`}
            {`<BasicTable\n`}
            {`  headers={["Nome", "Email", "Cargo"]}\n`}
            {`  data={[\n`}
            {`    ["João Silva", "joao@email.com", "Desenvolvedor"],\n`}
            {`    ["Maria Santos", "maria@email.com", "Designer"]\n`}
            {`  ]}\n`}
            {`  theme="default"\n`}
            {`  striped={true}\n`}
            {`  hoverEffect={true}\n`}
            {`/>\n\n`}
            {`// Exemplo de uso da lista\n`}
            {`<SimpleList\n`}
            {`  items={["Item 1", "Item 2", "Item 3"]}\n`}
            {`  bullet="disc"\n`}
            {`  bulletColor="text-blue-500"\n`}
            {`/>`}
          </code>
        </div>
      </motion.div>
    </section>
  );
}
