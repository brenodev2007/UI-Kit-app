import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ButtonsPage from "./pages/buttons";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/button" element={<ButtonsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
