import { Facebook, Twitter, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4">SorianiUi</h3>
          <p className="text-gray-400">
            The library that makes your React development easier with modern,
            fast, and easily customizable components.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#vantagens"
                className="hover:text-blue-500 transition-colors duration-200"
              >
                Advantages
              </a>
            </li>
            <li>
              <a
                href="#docs"
                className="hover:text-blue-500 transition-colors duration-200"
              >
                Documentation
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="hover:text-blue-500 transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter / Social */}
        <div>
          <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
          <div className="flex space-x-4 mb-4">
            {[Facebook, Twitter, Instagram, Github].map((Icon, idx) => (
              <Icon
                key={idx}
                className="w-6 h-6 text-gray-400 hover:text-blue-500 transition-transform duration-300 hover:scale-125 cursor-pointer"
              />
            ))}
          </div>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-gray-200 focus:outline-none focus:border-blue-500 flex-1"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Breno Soriani. All rights reserved.
      </div>
    </footer>
  );
}
