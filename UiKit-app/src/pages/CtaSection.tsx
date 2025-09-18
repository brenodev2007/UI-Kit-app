import { useState } from "react";

const CTASection = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("npm install sua-biblioteca");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Install it now and elevate your projects with modern, high-quality
            components.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
          <div className="relative w-full md:w-auto">
            <div className="bg-gray-800 rounded-lg p-4 pr-20">
              <code className="text-white font-mono px-10">
                npm install soriani-ui
              </code>
            </div>
            <button
              onClick={copyToClipboard}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              {copied ? "Copiado!" : "Copiar"}
            </button>
          </div>

          <div className="flex gap-4">
            <a
              href="/docs"
              className="bg-white text-blue-900 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-colors inline-flex items-center"
            >
              <BookOpenIcon className="w-5 h-5 mr-2" />
              View Documentation
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <RocketIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2">Easy to Use</h3>
            <p className="text-blue-200">
              Simple integration with any React project
            </p>
          </div>

          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CustomizeIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2">Fully Customizable</h3>
            <p className="text-blue-200">
              Adapt the look and feel to your design system
            </p>
          </div>

          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <SupportIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2">Active Support</h3>
            <p>Active community, ready to help you</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Ícones (substitua por seus próprios ícones ou use uma biblioteca como react-icons)
const BookOpenIcon = ({ className }: { className: string }) => (
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
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
);

const RocketIcon = ({ className }: { className: string }) => (
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
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

const CustomizeIcon = ({ className }: { className: string }) => (
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
      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
    />
  </svg>
);

const SupportIcon = ({ className }: { className: string }) => (
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
      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

export default CTASection;
