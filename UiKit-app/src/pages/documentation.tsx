import React, { useState } from "react";
import Input from "../components/input/textField";
import Modal from "../components/feedbacks/modal";

const DocumentationPage = () => {
  const [activeTab, setActiveTab] = useState("installation");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState("");
  const [isDefaultOpen, setIsDefaultOpen] = useState(false);
  const [isFooterOpen, setIsFooterOpen] = useState(false);

  const copyToClipboard = (text: string, id: React.SetStateAction<string>) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  // Função para rolar até a seção quando clicar nos links do header
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setSidebarOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <CubeIcon className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">LumiUI Docs</h1>
          </div>

          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection("installation")}
              className="text-gray-700 hover:text-blue-600"
            >
              Guide
            </button>
            <button
              onClick={() => setActiveTab("button")}
              className="text-gray-700 hover:text-blue-600"
            >
              Components
            </button>
            <button
              onClick={() => setActiveTab("examples")}
              className="text-gray-700 hover:text-blue-600"
            >
              Examples
            </button>
            <button
              onClick={() => setActiveTab("api")}
              className="text-gray-700 hover:text-blue-600"
            >
              API
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/brenodev2007/UiKit"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <GithubIcon className="w-5 h-5 mr-2" />
              GitHub
            </a>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-20 md:static md:z-auto md:block transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 transition-transform duration-300 ease-in-out md:transition-none w-64 bg-white border-r border-gray-200 overflow-y-auto pt-8 pb-4`}
        >
          <div className="px-4 space-y-6">
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Getting Started
              </h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <button
                    onClick={() => setActiveTab("installation")}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                      activeTab === "installation"
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    Installation
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("usage")}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                      activeTab === "usage"
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    Usage
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("theming")}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                      activeTab === "theming"
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    Theming
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Components
              </h3>
              <ul className="mt-2 space-y-1">
                {[
                  "Button",
                  "Card",
                  "Modal",
                  "Input",
                  "Alert",
                  "Avatar",
                  "Badge",
                  "Dropdown",
                ].map((component) => (
                  <li key={component}>
                    <button
                      onClick={() => setActiveTab(component.toLowerCase())}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                        activeTab === component.toLowerCase()
                          ? "bg-blue-100 text-blue-700"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {component}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Resources
              </h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <button
                    onClick={() => setActiveTab("api")}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                      activeTab === "api"
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    API Reference
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("examples")}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                      activeTab === "examples"
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    Examples
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("faq")}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                      activeTab === "faq"
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-gray-900 bg-opacity-50 z-10 md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Main content */}
        <main className="flex-1 p-6 md:p-8 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Installation Section */}
            {activeTab === "installation" && (
              <div id="installation">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Installation
                </h2>
                <p className="text-gray-700 mb-6">
                  Get started with LumiUI by installing it via npm or yarn. Make
                  sure you have React installed in your project first.
                </p>

                <div className="bg-gray-800 rounded-lg p-4 mb-6 relative">
                  <div className="absolute top-3 right-3">
                    <button
                      onClick={() =>
                        copyToClipboard("npm install lumi-ui", "install-npm")
                      }
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {copiedCode === "install-npm" ? (
                        <CheckIcon className="w-5 h-5" />
                      ) : (
                        <ClipboardIcon className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  <code className="text-white font-mono block">
                    npm install lumi-ui
                  </code>
                </div>

                <div className="bg-gray-800 rounded-lg p-4 mb-6 relative">
                  <div className="absolute top-3 right-3">
                    <button
                      onClick={() =>
                        copyToClipboard("yarn add lumi-ui", "install-yarn")
                      }
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {copiedCode === "install-yarn" ? (
                        <CheckIcon className="w-5 h-5" />
                      ) : (
                        <ClipboardIcon className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  <code className="text-white font-mono block">
                    yarn add lumi-ui
                  </code>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  Peer Dependencies
                </h3>
                <p className="text-gray-700 mb-4">
                  LumiUI requires the following peer dependencies. Make sure
                  they are installed in your project:
                </p>
                <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-2">
                  <li>React (^17.0.0 || ^18.0.0)</li>
                  <li>React DOM (^17.0.0 || ^18.0.0)</li>
                  <li>Tailwind CSS (^3.0.0)</li>
                </ul>
              </div>
            )}

            {/* Usage Section */}
            {activeTab === "usage" && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Usage</h2>
                <p className="text-gray-700 mb-6">
                  After installing LumiUI, you can import components and start
                  using them in your application.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  Basic Example
                </h3>
                <div className="bg-gray-800 rounded-lg p-4 mb-6 relative">
                  <div className="absolute top-3 right-3">
                    <button
                      onClick={() =>
                        copyToClipboard(
                          `import { Button } from 'lumi-ui';

function App() {
  return (
    <div>
      <Button variant="primary">Click Me</Button>
    </div>
  );
}

export default App;`,
                          "usage-basic"
                        )
                      }
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {copiedCode === "usage-basic" ? (
                        <CheckIcon className="w-5 h-5" />
                      ) : (
                        <ClipboardIcon className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  <pre className="text-white font-mono text-sm">
                    {`import { Button } from 'lumi-ui';

function App() {
  return (
    <div>
      <Button variant="primary">Click Me</Button>
    </div>
  );
}

export default App;`}
                  </pre>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  CSS Setup
                </h3>
                <p className="text-gray-700 mb-4">
                  Make sure to include the LumiUI styles in your project. If
                  you're using Tailwind CSS, you need to add the LumiUI source
                  files to your tailwind.config.js:
                </p>

                <div className="bg-gray-800 rounded-lg p-4 mb-6 relative">
                  <div className="absolute top-3 right-3">
                    <button
                      onClick={() =>
                        copyToClipboard(
                          `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/lumi-ui/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`,
                          "usage-css"
                        )
                      }
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {copiedCode === "usage-css" ? (
                        <CheckIcon className="w-5 h-5" />
                      ) : (
                        <ClipboardIcon className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  <pre className="text-white font-mono text-sm">
                    {`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/lumi-ui/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
                  </pre>
                </div>
              </div>
            )}

            {/* Theming Section */}
            {activeTab === "theming" && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Theming
                </h2>
                <p className="text-gray-700 mb-6">
                  Customize LumiUI to match your project's design system with
                  our comprehensive theming system.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  Customizing Colors
                </h3>
                <p className="text-gray-700 mb-4">
                  You can override the default theme by extending the Tailwind
                  CSS configuration:
                </p>

                <div className="bg-gray-800 rounded-lg p-4 mb-6 relative">
                  <div className="absolute top-3 right-3">
                    <button
                      onClick={() =>
                        copyToClipboard(
                          `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/lumi-ui/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      }
    },
  },
  plugins: [],
}`,
                          "theming-colors"
                        )
                      }
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {copiedCode === "theming-colors" ? (
                        <CheckIcon className="w-5 h-5" />
                      ) : (
                        <ClipboardIcon className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  <pre className="text-white font-mono text-sm">
                    {`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/lumi-ui/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      }
    },
  },
  plugins: [],
}`}
                  </pre>
                </div>
              </div>
            )}

            {/* Button Component Documentation */}
            {activeTab === "button" && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Button
                </h2>
                <p className="text-gray-700 mb-6">
                  Buttons allow users to perform actions with a single tap.
                  LumiUI provides a versatile Button component with multiple
                  variants and sizes.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  Import
                </h3>
                <div className="bg-gray-800 rounded-lg p-4 mb-6 relative">
                  <div className="absolute top-3 right-3">
                    <button
                      onClick={() =>
                        copyToClipboard(
                          `import { Button } from 'lumi-ui';`,
                          "button-import"
                        )
                      }
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {copiedCode === "button-import" ? (
                        <CheckIcon className="w-5 h-5" />
                      ) : (
                        <ClipboardIcon className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  <code className="text-white font-mono block">
                    import {"{"} Button {"}"} from 'lumi-ui';
                  </code>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  Examples
                </h3>
                <div className="border border-gray-200 rounded-lg p-6 mb-6">
                  <div className="flex flex-wrap gap-4 mb-8">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                      Primary
                    </button>
                    <button className="px-4 py-2 bg-gray-200 text-gray-900 rounded-md hover:bg-gray-300 transition-colors">
                      Secondary
                    </button>
                    <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                      Success
                    </button>
                    <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                      Danger
                    </button>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-4 relative">
                    <div className="absolute top-3 right-3">
                      <button
                        onClick={() =>
                          copyToClipboard(
                            `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>
<Button variant="danger">Danger</Button>`,
                            "button-variants"
                          )
                        }
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {copiedCode === "button-variants" ? (
                          <CheckIcon className="w-5 h-5" />
                        ) : (
                          <ClipboardIcon className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    <pre className="text-white font-mono text-sm">
                      {`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>
<Button variant="danger">Danger</Button>`}
                    </pre>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  API Reference
                </h3>
                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Prop
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Type
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Default
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          variant
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          'primary' | 'secondary' | 'success' | 'danger'
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          'primary'
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          Determines the button style
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          size
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          'sm' | 'md' | 'lg'
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          'md'
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          Determines the button size
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          disabled
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          boolean
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          false
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          Disables the button
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Card Component Documentation */}
            {activeTab === "card" && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Card</h2>
                <p className="text-gray-700 mb-6">
                  Cards are flexible containers for displaying content. They can
                  contain images, text, buttons, and more.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  Import
                </h3>
                <div className="bg-gray-800 rounded-lg p-4 mb-6 relative">
                  <div className="absolute top-3 right-3">
                    <button
                      onClick={() =>
                        copyToClipboard(
                          `import { Card } from 'lumi-ui';`,
                          "card-import"
                        )
                      }
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {copiedCode === "card-import" ? (
                        <CheckIcon className="w-5 h-5" />
                      ) : (
                        <ClipboardIcon className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  <code className="text-white font-mono block">
                    import {"{"} Card {"}"} from 'lumi-ui';
                  </code>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  Examples
                </h3>
                <div className="border border-gray-200 rounded-lg p-6 mb-6">
                  <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow mb-8">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      Card Title
                    </h5>
                    <p className="mb-3 font-normal text-gray-700">
                      This is an example card component with some sample
                      content.
                    </p>
                    <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                      Read more
                    </button>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-4 relative">
                    <div className="absolute top-3 right-3">
                      <button
                        onClick={() =>
                          copyToClipboard(
                            `<Card>
  <Card.Header>
    <Card.Title>Card Title</Card.Title>
  </Card.Header>
  <Card.Body>
    <p>This is an example card component with some sample content.</p>
  </Card.Body>
  <Card.Footer>
    <Button variant="primary">Read more</Button>
  </Card.Footer>
</Card>`,
                            "card-example"
                          )
                        }
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {copiedCode === "card-example" ? (
                          <CheckIcon className="w-5 h-5" />
                        ) : (
                          <ClipboardIcon className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    <pre className="text-white font-mono text-sm">
                      {`<Card>
  <Card.Header>
    <Card.Title>Card Title</Card.Title>
  </Card.Header>
  <Card.Body>
    <p>This is an example card component with some sample content.</p>
  </Card.Body>
  <Card.Footer>
    <Button variant="primary">Read more</Button>
  </Card.Footer>
</Card>`}
                    </pre>
                  </div>
                </div>
              </div>
            )}

            {/*Input Documentation */}
            {activeTab === "input" && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Input</h2>
                <p className="text-gray-700 mb-6">
                  The Input component allows users to enter text. LumiUI
                  provides various input types and sizes for different use
                  cases.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  Import
                </h3>
                <div className="bg-gray-800 rounded-lg p-4 mb-6 relative">
                  <div className="absolute top-3 right-3">
                    <button
                      onClick={() =>
                        copyToClipboard(
                          `import { Input } from 'lumi-ui';`,
                          "input-import"
                        )
                      }
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {copiedCode === "input-import" ? (
                        <CheckIcon className="w-5 h-5" />
                      ) : (
                        <ClipboardIcon className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  <code className="text-white font-mono block">
                    import {"{"} Input {"}"} from 'lumi-ui';
                  </code>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  Examples
                </h3>
                <div className="border border-gray-200 rounded-lg p-6 mb-6">
                  <div className="flex flex-col gap-4 mb-8">
                    <Input placeholder="Default input" />
                    <Input type="password" placeholder="Password" />
                    <Input disabled placeholder="Disabled input" />
                  </div>

                  <div className="bg-gray-800 rounded-lg p-4 relative">
                    <div className="absolute top-3 right-3">
                      <button
                        onClick={() =>
                          copyToClipboard(
                            `<Input placeholder="Default input" />
<Input type="password" placeholder="Password" />
<Input disabled placeholder="Disabled input" />`,
                            "input-examples"
                          )
                        }
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {copiedCode === "input-examples" ? (
                          <CheckIcon className="w-5 h-5" />
                        ) : (
                          <ClipboardIcon className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    <pre className="text-white font-mono text-sm">
                      {`<Input placeholder="Default input" />
<Input type="password" placeholder="Password" />
<Input disabled placeholder="Disabled input" />`}
                    </pre>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  API Reference
                </h3>
                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Prop
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Default
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          type
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          string
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          "text"
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          Input type, e.g., text, password
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          placeholder
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          string
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          ""
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          Placeholder text
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          disabled
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          boolean
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          false
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          Disables the input
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/*Modal Documentation */}
            {activeTab === "modal" && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Modal</h2>
                <p className="text-gray-700 mb-6">
                  The Modal component is used to display content in a layer
                  above the application. LumiUI Modal supports headers, footers,
                  and customizable sizes.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  Import
                </h3>
                <div className="bg-gray-800 rounded-lg p-4 mb-6 relative">
                  <div className="absolute top-3 right-3">
                    <button
                      onClick={() =>
                        copyToClipboard(
                          `import { Modal } from 'lumi-ui';`,
                          "modal-import"
                        )
                      }
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {copiedCode === "modal-import" ? (
                        <CheckIcon className="w-5 h-5" />
                      ) : (
                        <ClipboardIcon className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  <code className="text-white font-mono block">
                    import {"{"} Modal {"}"} from 'lumi-ui';
                  </code>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  Examples
                </h3>
                <div className="border border-gray-200 rounded-lg p-6 mb-6">
                  <div className="flex flex-col gap-4 mb-8">
                    <button
                      onClick={() => setIsDefaultOpen(true)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md"
                    >
                      Open Default Modal
                    </button>
                    <Modal
                      isOpen={isDefaultOpen}
                      title="Default Modal"
                      onClose={() => setIsDefaultOpen(false)}
                    >
                      <p>This is a default modal example.</p>
                    </Modal>

                    <button
                      onClick={() => setIsFooterOpen(true)}
                      className="px-4 py-2 bg-green-600 text-white rounded-md"
                    >
                      Open Modal with Footer
                    </button>
                    <Modal
                      isOpen={isFooterOpen}
                      title="Modal with Footer"
                      onClose={() => setIsFooterOpen(false)}
                      footer={
                        <button
                          onClick={() => setIsFooterOpen(false)}
                          className="px-4 py-2 bg-blue-600 text-white rounded-md"
                        >
                          Close
                        </button>
                      }
                    >
                      <p>This modal includes a footer button.</p>
                    </Modal>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-4 relative">
                    <div className="absolute top-3 right-3">
                      <button
                        onClick={() =>
                          copyToClipboard(
                            `<Modal isOpen={true} title="Default Modal">
  <p>This is a default modal example.</p>
</Modal>

<Modal isOpen={true} title="Modal with Footer" footer={<button className="px-4 py-2 bg-blue-600 text-white rounded-md">Close</button>}>
  <p>This modal includes a footer button.</p>
</Modal>`,
                            "modal-examples"
                          )
                        }
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {copiedCode === "modal-examples" ? (
                          <CheckIcon className="w-5 h-5" />
                        ) : (
                          <ClipboardIcon className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    <pre className="text-white font-mono text-sm">
                      {`<Modal isOpen={true} title="Default Modal">
  <p>This is a default modal example.</p>
</Modal>

<Modal isOpen={true} title="Modal with Footer" footer={<button className="px-4 py-2 bg-blue-600 text-white rounded-md">Close</button>}>
  <p>This modal includes a footer button.</p>
</Modal>`}
                    </pre>
                  </div>
                </div>
              </div>
            )}

            {/* Input Documentation */}
            {activeTab === "input" && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Input</h2>
                <p className="text-gray-700 mb-6">
                  The Input component allows users to enter text or numbers.
                  LumiUI Input supports different types, sizes, placeholders,
                  and disabled states.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  Import
                </h3>
                <div className="bg-gray-800 rounded-lg p-4 mb-6 relative">
                  <div className="absolute top-3 right-3">
                    <button
                      onClick={() =>
                        copyToClipboard(
                          `import { Input } from 'lumi-ui';`,
                          "input-import"
                        )
                      }
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {copiedCode === "input-import" ? (
                        <CheckIcon className="w-5 h-5" />
                      ) : (
                        <ClipboardIcon className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  <code className="text-white font-mono block">
                    import {"{"} Input {"}"} from 'lumi-ui';
                  </code>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  Examples
                </h3>
                <div className="border border-gray-200 rounded-lg p-6 mb-6">
                  <div className="flex flex-col gap-4 mb-8">
                    <Input placeholder="Default Input" />
                    <Input placeholder="Disabled Input" disabled />
                    <Input placeholder="Small Input" size="sm" />
                    <Input placeholder="Large Input" size="lg" />
                  </div>

                  <div className="bg-gray-800 rounded-lg p-4 relative">
                    <div className="absolute top-3 right-3">
                      <button
                        onClick={() =>
                          copyToClipboard(
                            `<Input placeholder="Default Input" />
<Input placeholder="Disabled Input" disabled />
<Input placeholder="Small Input" size="sm" />
<Input placeholder="Large Input" size="lg" />`,
                            "input-examples"
                          )
                        }
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {copiedCode === "input-examples" ? (
                          <CheckIcon className="w-5 h-5" />
                        ) : (
                          <ClipboardIcon className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    <pre className="text-white font-mono text-sm">
                      {`<Input placeholder="Default Input" />
<Input placeholder="Disabled Input" disabled />
<Input placeholder="Small Input" size="sm" />
<Input placeholder="Large Input" size="lg" />`}
                    </pre>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                  API Reference
                </h3>
                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Prop
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Default
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          placeholder
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          string
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          ""
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          Placeholder text
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          disabled
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          boolean
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          false
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          Disables the input
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          size
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          'sm' | 'md' | 'lg'
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          'md'
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          Determines input size
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          value
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          string
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          ""
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          Controlled input value
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          onChange
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          (e: React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt;
                          void
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          -
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          Callback when input value changes
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Placeholder sections for other components */}
            {["alert", "avatar", "badge", "dropdown"].includes(activeTab) && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                </h2>
                <p className="text-gray-700 mb-6">
                  Documentation for the {activeTab} component is coming soon.
                  Check back later for detailed information, examples, and API
                  reference.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                  <h3 className="text-lg font-medium text-blue-800 mb-2">
                    Component Under Development
                  </h3>
                  <p className="text-blue-700">
                    We're working hard to document all LumiUI components. This
                    section will be available in the next update.
                  </p>
                </div>
              </div>
            )}

            {/* API Reference Section */}
            {activeTab === "api" && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  API Reference
                </h2>
                <p className="text-gray-700 mb-6">
                  Comprehensive API documentation for all LumiUI components,
                  props, and utilities.
                </p>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                  <h3 className="text-lg font-medium text-yellow-800 mb-2">
                    API Documentation In Progress
                  </h3>
                  <p className="text-yellow-700">
                    We're compiling detailed API documentation for all
                    components. This section will be available soon.
                  </p>
                </div>
              </div>
            )}

            {/* Examples Section */}
            {activeTab === "examples" && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Examples
                </h2>
                <p className="text-gray-700 mb-6">
                  Explore real-world examples of LumiUI components in action.
                  These examples demonstrate common use cases and best
                  practices.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Login Form
                    </h3>
                    <p className="text-gray-700 mb-4">
                      A simple login form using Input and Button components.
                    </p>
                    <button
                      onClick={() => setActiveTab("input")}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View Example →
                    </button>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      User Profile
                    </h3>
                    <p className="text-gray-700 mb-4">
                      A user profile card with Avatar and Badge components.
                    </p>
                    <button
                      onClick={() => setActiveTab("avatar")}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View Example →
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* FAQ Section */}
            {activeTab === "faq" && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-700 mb-6">
                  Find answers to common questions about LumiUI installation,
                  usage, and customization.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      How do I customize the theme?
                    </h3>
                    <p className="text-gray-700">
                      You can customize LumiUI by extending the default Tailwind
                      CSS configuration. See the Theming section for detailed
                      instructions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Does LumiUI work with React 18?
                    </h3>
                    <p className="text-gray-700">
                      Yes, LumiUI is compatible with both React 17 and React 18.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Can I use individual components?
                    </h3>
                    <p className="text-gray-700">
                      Yes, you can import individual components to keep your
                      bundle size small.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Footer */}
            <footer className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <CubeIcon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">LumiUI</span>
                </div>
                <div className="flex space-x-6">
                  <a
                    href="https://github.com/brenodev2007/UiKit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-700"
                  >
                    GitHub
                  </a>
                  <button
                    onClick={() => setActiveTab("installation")}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    Documentation
                  </button>
                  <button
                    onClick={() => setActiveTab("examples")}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    Examples
                  </button>
                  <a href="#" className="text-gray-500 hover:text-gray-700">
                    License
                  </a>
                </div>
              </div>
              <p className="mt-4 text-center md:text-left text-gray-500 text-sm">
                Built with React and Tailwind CSS. Released under the MIT
                License.
              </p>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
};

// Icon components (remain the same)
const CubeIcon = ({ className }: { className: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
    />
  </svg>
);

const GithubIcon = ({ className }: { className: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const MenuIcon = ({ className }: { className: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const ClipboardIcon = ({ className }: { className: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
    />
  </svg>
);

const CheckIcon = ({ className }: { className: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

export default DocumentationPage;
