import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Aqui você pode adicionar outras rotas depois */}
      </Routes>
    </Router>
  );
}

export default App;
