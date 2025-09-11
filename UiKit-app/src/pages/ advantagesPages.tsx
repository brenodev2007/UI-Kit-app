import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Vantagens() {
  const vantagens = [
    {
      titulo: "Produtividade",
      descricao:
        "Reduza o tempo de desenvolvimento com componentes prontos e altamente reutilizáveis.",
    },
    {
      titulo: "Performance",
      descricao:
        "Código otimizado para rodar de forma leve e rápida em qualquer projeto React.",
    },
    {
      titulo: "Customização",
      descricao:
        "Estilize facilmente com Tailwind e adapte cada componente ao seu design system.",
    },
    {
      titulo: "Escalabilidade",
      descricao:
        "Perfeita para projetos pequenos ou grandes, crescendo junto com sua aplicação.",
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
