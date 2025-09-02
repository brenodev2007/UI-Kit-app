import { useState } from "react";
import Navbar from "../components/Navbar";
import Alert, { type AlertVariant } from "../components/feedbacks/alert";
import Toast, { type ToastVariant } from "../components/feedbacks/toast";
import FormModal from "../components/feedbacks/modalForm";
import Button from "../components/button/Button";
import Tooltip from "../components/feedbacks/tooltip";

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

  const copyCode = (code: string) => navigator.clipboard.writeText(code);

  return (
    <section className="w-full min-h-screen p-8 sm:p-10 flex flex-col items-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="w-full mb-12">
        <Navbar />
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500 text-center">
        Feedback Playground
      </h1>
      <p className="text-purple-300 text-lg mb-12 max-w-3xl text-center">
        Personalize Alert, Toast e Modal em tempo real e copie o código!
      </p>

      {/* Controles */}
      <div className="w-full max-w-5xl flex flex-wrap gap-4 justify-center mb-10">
        <select
          className="px-3 py-2 rounded-md text-black bg-white dark:bg-gray-800"
          value={alertProps.variant}
          onChange={(e) =>
            setAlertProps((prev) => ({
              ...prev,
              variant: e.target.value as AlertVariant,
            }))
          }
        >
          <option value="success">Success</option>
          <option value="error">Error</option>
          <option value="warning">Warning</option>
          <option value="info">Info</option>
        </select>

        <input
          type="text"
          placeholder="Título do Alert"
          className="px-3 py-2 rounded-md text-black bg-white dark:bg-gray-800"
          value={alertProps.title}
          onChange={(e) =>
            setAlertProps((prev) => ({ ...prev, title: e.target.value }))
          }
        />

        <input
          type="text"
          placeholder="Mensagem do Alert"
          className="px-3 py-2 rounded-md text-black bg-white dark:bg-gray-800"
          value={alertProps.message}
          onChange={(e) =>
            setAlertProps((prev) => ({ ...prev, message: e.target.value }))
          }
        />

        <select
          className="px-3 py-2 rounded-md text-black bg-white dark:bg-gray-800"
          value={modalSize}
          onChange={(e) => setModalSize(e.target.value as any)}
        >
          <option value="sm">Pequeno</option>
          <option value="md">Médio</option>
          <option value="lg">Grande</option>
          <option value="xl">XL</option>
          <option value="full">Full</option>
        </select>

        <Button
          variant="primary"
          onClick={() => setToastProps((prev) => ({ ...prev, show: true }))}
        >
          Mostrar Toast
        </Button>
        <Button variant="outline" onClick={() => setModalOpen(true)}>
          Abrir Modal
        </Button>
      </div>

      {/* Preview Cards */}
      <div className="w-full max-w-5xl grid sm:grid-cols-3 gap-6">
        {/* Alert Card */}
        <div className="bg-gray-800 rounded-xl p-6 flex flex-col items-center shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Alert Preview</h2>
          <Alert {...alertProps} />
          <Tooltip content="Clique para copiar código">
            <button
              className="mt-4 text-sm text-blue-400 underline"
              onClick={() =>
                copyCode(
                  `<Alert variant="${alertProps.variant}" title="${alertProps.title}" message="${alertProps.message}" dismissible={true} />`
                )
              }
            >
              Copiar código
            </button>
          </Tooltip>
        </div>

        {/* Toast Card */}
        <div className="bg-gray-800 rounded-xl p-6 flex flex-col items-center shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Toast Preview</h2>
          <Button
            variant="primary"
            onClick={() => setToastProps((prev) => ({ ...prev, show: true }))}
          >
            Mostrar Toast
          </Button>
          <Tooltip content="Clique para copiar código">
            <button
              className="mt-4 text-sm text-blue-400 underline"
              onClick={() =>
                copyCode(
                  `<Toast variant="${toastProps.variant}" title="${toastProps.title}" message="${toastProps.message}" duration={${toastProps.duration}} onClose={() => {}} />`
                )
              }
            >
              Copiar código
            </button>
          </Tooltip>
        </div>

        {/* Modal Card */}
        <div className="bg-gray-800 rounded-xl p-6 flex flex-col items-center shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Modal Preview</h2>
          <Button variant="primary" onClick={() => setModalOpen(true)}>
            Abrir Modal
          </Button>
          <Tooltip content="Clique para copiar código">
            <button
              className="mt-4 text-sm text-blue-400 underline"
              onClick={() =>
                copyCode(
                  `<FormModal isOpen={true} onClose={() => {}} onSubmit={() => {}} title="Enviar Feedback" submitLabel="Enviar" cancelLabel="Cancelar" size="${modalSize}" />`
                )
              }
            >
              Copiar código
            </button>
          </Tooltip>
        </div>
      </div>

      {/* Modal */}
      <FormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={(data) => console.log("Modal enviado", data)}
        title="Enviar Feedback"
        submitLabel="Enviar"
        cancelLabel="Cancelar"
        size={modalSize}
      />

      {/* Toast */}
      {toastProps.show && (
        <Toast
          variant={toastProps.variant}
          title={toastProps.title}
          message={toastProps.message}
          duration={toastProps.duration}
          onClose={() => setToastProps((prev) => ({ ...prev, show: false }))}
        />
      )}
    </section>
  );
}
