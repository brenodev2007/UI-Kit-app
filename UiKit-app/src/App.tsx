import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ButtonsPage from "./pages/buttonsPage";
import CardsPage from "./pages/cardsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/button" element={<ButtonsPage />} />
        <Route path="/cards" element={<CardsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
