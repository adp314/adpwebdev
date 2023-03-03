import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { WorkBView } from "./pages/Work";
import { AboutBView } from "./pages/About";
import "./i18n";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/work" />} />
        <Route path="/work" element={<WorkBView />} />
        <Route path="/about" element={<AboutBView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
