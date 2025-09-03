import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ButtonsPage from "./pages/buttonsPage";
import CardsPage from "./pages/cardsPage";
import ExtrasPage from "./pages/extrasPage";
import FeedbackPage from "./pages/feedbackPage";
import InputComponentsShowcase from "./pages/inputPage";
import ListComponentsPage from "./pages/listPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/button" element={<ButtonsPage />} />
        <Route path="/cards" element={<CardsPage />} />
        <Route path="/extras" element={<ExtrasPage />} />
        <Route path="/feedbacks" element={<FeedbackPage />} />
        <Route path="/input" element={<InputComponentsShowcase />} />
        <Route path="/list" element={<ListComponentsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
