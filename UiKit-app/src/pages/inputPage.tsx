import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Navbar from "../components/Navbar";

import {
  FiCopy,
  FiCheck,
  FiEye,
  FiEyeOff,
  FiMail,
  FiLock,
} from "react-icons/fi";

// Importando os componentes de input
import Checkbox from "../components/input/checkBox";
import { RadioGroup } from "../components/input/radioGroup";
import { Radio } from "../components/input/radioButton";
import Select from "../components/input/selectDropDown";
import Textarea from "../components/input/textArea";
import TextField from "../components/input/textField";
import Toggle from "../components/input/toggle";

// Variants para animação
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: {
    scale: 1.02,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

export default function InputComponentsShowcase() {
  const [copied, setCopied] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  // Estados para os componentes
  const [checkboxState, setCheckboxState] = useState({
    checked: false,
    indeterminate: false,
  });

  const [radioValue, setRadioValue] = useState("option1");
  const [selectValue, setSelectValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [textFieldValue, setTextFieldValue] = useState("");
  const [toggleState, setToggleState] = useState(false);

  // Copiar código
  const copyCode = (code: string, type: string) => {
    navigator.clipboard.writeText(code);
    setCopied(type);
    setTimeout(() => setCopied(null), 1500);
  };

  // Opções para o Select
  const selectOptions = [
    { value: "option1", label: "Opção 1" },
    { value: "option2", label: "Opção 2" },
    { value: "option3", label: "Opção 3" },
    { value: "option4", label: "Opção 4", disabled: true },
  ];

  // Gerar código de exemplo para cada componente
  const componentCodes = {
    checkbox: `<Checkbox
  label="Checkbox exemplo"
  checked={checked}
  onChange={(checked) => setChecked(checked)}
  variant="primary"
  size="md"
/>`,
    radio: `<RadioGroup
  value={value}
  onChange={setValue}
  label="Selecione uma opção"
>
  <Radio value="option1">Opção 1</Radio>
  <Radio value="option2">Opção 2</Radio>
  <Radio value="option3">Opção 3</Radio>
</RadioGroup>`,
    select: `<Select
  options={options}
  value={value}
  onChange={setValue}
  placeholder="Selecione uma opção"
  searchable={true}
  label="Seleção"
/>`,
    textarea: `<Textarea
  label="Mensagem"
  placeholder="Digite sua mensagem..."
  value={value}
  onChange={(e) => setValue(e.target.value)}
  rows={4}
  resize="vertical"
/>`,
    textfield: `<TextField
  label="Email"
  type="email"
  placeholder="seu@email.com"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  icon={FiMail}
  required={true}
/>`,
    toggle: `<Toggle
  checked={checked}
  onChange={setChecked}
  label="Ativar notificações"
  variant="primary"
  size="md"
/>`,
  };

  return (
    <section className="w-full min-h-screen p-4 md:p-10 flex flex-col items-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="w-full mb-8 md:mb-12">
        <Navbar />
      </div>

      <motion.h1
        className="text-3xl md:text-5xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      >
        Input components
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
        Explore and customize all input components in real time and copy the
        code to use in your projects!
      </motion.p>

      {/* Component Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Checkbox */}
        <motion.div
          className="bg-gray-800 rounded-xl p-6 flex flex-col shadow-lg border border-gray-700"
          variants={cardVariants}
          whileHover="hover"
        >
          <h2 className="text-xl font-semibold mb-4 text-cyan-400">Checkbox</h2>
          <div className="space-y-4 mb-4">
            <Checkbox
              label="Checkbox padrão"
              checked={checkboxState.checked}
              onChange={(checked) =>
                setCheckboxState({ ...checkboxState, checked })
              }
              variant="primary"
            />
            <Checkbox
              label="Checkbox com estado indeterminado"
              indeterminate={checkboxState.indeterminate}
              onChange={() =>
                setCheckboxState({
                  ...checkboxState,
                  indeterminate: !checkboxState.indeterminate,
                })
              }
              variant="success"
            />
            <Checkbox
              label="Checkbox desabilitado"
              checked={true}
              disabled
              variant="secondary"
            />
          </div>
          <button
            className="mt-4 flex items-center gap-2 px-4 py-2 bg-cyan-700 hover:bg-cyan-600 rounded-md text-sm text-white transition-all self-start"
            onClick={() => copyCode(componentCodes.checkbox, "checkbox")}
          >
            {copied === "checkbox" ? (
              <FiCheck className="text-green-400" />
            ) : (
              <FiCopy />
            )}
            {copied === "checkbox" ? "Copiado!" : "Copiar código"}
          </button>
        </motion.div>

        {/* Radio Group */}
        <motion.div
          className="bg-gray-800 rounded-xl p-6 flex flex-col shadow-lg border border-gray-700"
          variants={cardVariants}
          whileHover="hover"
        >
          <h2 className="text-xl font-semibold mb-4 text-cyan-400">
            Radio Group
          </h2>
          <div className="mb-4">
            <RadioGroup
              value={radioValue}
              onChange={setRadioValue}
              label="Selecione uma option"
            >
              <Radio value="option1" variant="primary">
                Option 1
              </Radio>
              <Radio value="option2" variant="primary">
                Option 2
              </Radio>
              <Radio value="option3" variant="primary">
                Option 3
              </Radio>
              <Radio value="option4" variant="primary" disabled>
                Opção desabilitada
              </Radio>
            </RadioGroup>
          </div>
          <button
            className="mt-4 flex items-center gap-2 px-4 py-2 bg-cyan-700 hover:bg-cyan-600 rounded-md text-sm text-white transition-all self-start"
            onClick={() => copyCode(componentCodes.radio, "radio")}
          >
            {copied === "radio" ? (
              <FiCheck className="text-green-400" />
            ) : (
              <FiCopy />
            )}
            {copied === "radio" ? "Copiado!" : "Copiar código"}
          </button>
        </motion.div>

        {/* Select */}
        <motion.div
          className="bg-gray-800 rounded-xl p-6 flex flex-col shadow-lg border border-gray-700"
          variants={cardVariants}
          whileHover="hover"
        >
          <h2 className="text-xl font-semibold mb-4 text-cyan-400">Select</h2>
          <div className="mb-4">
            <Select
              options={selectOptions}
              value={selectValue}
              onChange={(value) => setSelectValue(value)}
              placeholder="Selecione uma opção"
              searchable={true}
              label="Seleção de opções"
              variant="outline"
              size="md"
            />
          </div>
          <button
            className="mt-4 flex items-center gap-2 px-4 py-2 bg-cyan-700 hover:bg-cyan-600 rounded-md text-sm text-white transition-all self-start"
            onClick={() => copyCode(componentCodes.select, "select")}
          >
            {copied === "select" ? (
              <FiCheck className="text-green-400" />
            ) : (
              <FiCopy />
            )}
            {copied === "select" ? "Copiado!" : "Copiar código"}
          </button>
        </motion.div>

        {/* Textarea */}
        <motion.div
          className="bg-gray-800 rounded-xl p-6 flex flex-col shadow-lg border border-gray-700"
          variants={cardVariants}
          whileHover="hover"
        >
          <h2 className="text-xl font-semibold mb-4 text-cyan-400">Textarea</h2>
          <div className="mb-4">
            <Textarea
              label="Mensagem"
              placeholder="Digite sua mensagem aqui..."
              value={textareaValue}
              onChange={(e) => setTextareaValue(e.target.value)}
              rows={4}
              resize="vertical"
              variant="outline"
              helperText="Máximo de 500 caracteres"
              showCount={true}
              maxLength={500}
            />
          </div>
          <button
            className="mt-4 flex items-center gap-2 px-4 py-2 bg-cyan-700 hover:bg-cyan-600 rounded-md text-sm text-white transition-all self-start"
            onClick={() => copyCode(componentCodes.textarea, "textarea")}
          >
            {copied === "textarea" ? (
              <FiCheck className="text-green-400" />
            ) : (
              <FiCopy />
            )}
            {copied === "textarea" ? "Copiado!" : "Copiar código"}
          </button>
        </motion.div>

        {/* TextField */}
        <motion.div
          className="bg-gray-800 rounded-xl p-6 flex flex-col shadow-lg border border-gray-700"
          variants={cardVariants}
          whileHover="hover"
        >
          <h2 className="text-xl font-semibold mb-4 text-cyan-400">
            TextField
          </h2>
          <div className="space-y-4 mb-4">
            <TextField
              label="Email"
              type="email"
              placeholder="seu@email.com"
              value={textFieldValue}
              onChange={(e) => setTextFieldValue(e.target.value)}
              icon={FiMail}
              variant="outline"
              required={true}
            />
            <TextField
              label="Senha"
              type={showPassword ? "text" : "password"}
              placeholder="Digite sua senha"
              value={textFieldValue}
              onChange={(e) => setTextFieldValue(e.target.value)}
              icon={FiLock}
              trailingIcon={showPassword ? FiEyeOff : FiEye}
              onTrailingIconClick={() => setShowPassword(!showPassword)}
              variant="outline"
            />
          </div>
          <button
            className="mt-4 flex items-center gap-2 px-4 py-2 bg-cyan-700 hover:bg-cyan-600 rounded-md text-sm text-white transition-all self-start"
            onClick={() => copyCode(componentCodes.textfield, "textfield")}
          >
            {copied === "textfield" ? (
              <FiCheck className="text-green-400" />
            ) : (
              <FiCopy />
            )}
            {copied === "textfield" ? "Copiado!" : "Copiar código"}
          </button>
        </motion.div>

        {/* Toggle */}
        <motion.div
          className="bg-gray-800 rounded-xl p-6 flex flex-col shadow-lg border border-gray-700"
          variants={cardVariants}
          whileHover="hover"
        >
          <h2 className="text-xl font-semibold mb-4 text-cyan-400">Toggle</h2>
          <div className="space-y-4 mb-4">
            <Toggle
              checked={toggleState}
              onChange={setToggleState}
              label="Notificações"
              variant="primary"
              size="md"
              labelPosition="right"
            />
            <Toggle
              checked={!toggleState}
              onChange={() => setToggleState(!toggleState)}
              label="Modo escuro"
              variant="neutral"
              size="md"
              labelPosition="right"
            />
            <Toggle
              checked={true}
              disabled
              label="Opção desabilitada"
              variant="success"
              size="md"
              labelPosition="right"
            />
          </div>
          <button
            className="mt-4 flex items-center gap-2 px-4 py-2 bg-cyan-700 hover:bg-cyan-600 rounded-md text-sm text-white transition-all self-start"
            onClick={() => copyCode(componentCodes.toggle, "toggle")}
          >
            {copied === "toggle" ? (
              <FiCheck className="text-green-400" />
            ) : (
              <FiCopy />
            )}
            {copied === "toggle" ? "Copiado!" : "Copiar código"}
          </button>
        </motion.div>
      </div>

      {/* Usage Instructions */}
      <motion.div
        className="w-full max-w-4xl bg-gray-800 rounded-xl p-6 border border-cyan-500/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.4 },
        }}
      >
        <h2 className="text-xl font-semibold mb-4 text-cyan-400">
          How to use the components
        </h2>
        <p className="text-gray-300 mb-4">
          All components are highly customizable and follow accessibility best
          practices. Simply copy the code for the desired component and import
          it into your project.
        </p>
        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <code className="text-sm text-cyan-300">
            {`// Importação dos componentes\n`}
            {`import Checkbox from "../components/inputs/Checkbox";\n`}
            {`import { Radio, RadioGroup } from "../components/inputs/Radio";\n`}
            {`import Select from "../components/inputs/Select";\n`}
            {`import Textarea from "../components/inputs/Textarea";\n`}
            {`import TextField from "../components/inputs/TextField";\n`}
            {`import Toggle from "../components/inputs/Toggle";`}
          </code>
        </div>
      </motion.div>
    </section>
  );
}
