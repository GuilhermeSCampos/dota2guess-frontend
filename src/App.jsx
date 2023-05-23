import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClassicGame from "./pages/ClassicGame";
import Home from "./pages/Home";
import QuoteGame from "./pages/QuoteGame";
import SkillGame from "./pages/SkillGame";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classic" element={<ClassicGame />} />
        <Route path="/quote" element={<QuoteGame />} />
        <Route path="/skill" element={<SkillGame />} />
      </Routes>
    </Router>
  );
}

export default App;
