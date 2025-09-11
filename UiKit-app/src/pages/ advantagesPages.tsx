import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Vantagens() {
  const vantagens = [
    {
      titulo: "Productivity",
      descricao:
        "Reduce development time with ready-to-use, highly reusable components.",
    },
    {
      titulo: "Performance",
      descricao:
        "Optimized code that runs fast and lightweight in any React project.",
    },
    {
      titulo: "Customization",
      descricao:
        "Easily style with Tailwind and adapt each component to your design system.",
    },
    {
      titulo: "Scalability",
      descricao:
        "Perfect for small or large projects, growing along with your application.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="vantagens" className="py-20 ">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Why use the LumiUi
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {vantagens.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
            >
              <CheckCircle className="h-10 w-10 text-blue-500 mb-5" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.titulo}
              </h3>
              <p className="text-gray-600 text-sm">{item.descricao}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
