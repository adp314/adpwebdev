import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { BrowserView, MobileView, TabletView } from "react-device-detect";
import { WorkBView } from "./pages/BrowserView/Work";
import { AboutBView } from "./pages/BrowserView/About";
import { HomeMView } from "./pages/MobileView/Home";
import "./i18n";

function App() {
  return (
    <BrowserRouter>
      <BrowserView>
        <Routes>
          <Route path="/" element={<Navigate to="/work" />} />
          <Route path="/work" element={<WorkBView />} />
          <Route path="/about" element={<AboutBView />} />
        </Routes>
      </BrowserView>
      {/* /// */}
      <MobileView>
        <Routes>
          <Route path="/" element={<HomeMView />} />
          <Route path="/home" element={<HomeMView />} />
        </Routes>
      </MobileView>
      {/* /// */}
      <TabletView>
        <Routes>
          <Route path="/" element={<WorkBView />} />
          <Route path="/home" element={<WorkBView />} />
        </Routes>
      </TabletView>
    </BrowserRouter>
  );
}

export default App;
