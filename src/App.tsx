import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserView, MobileView, TabletView } from "react-device-detect";
import { HomeBView } from "./pages/BrowserView/Home";
import { HomeMView } from "./pages/MobileView/Home";
import "./i18n";
import { Suspense } from "react";

const loadingTraduction = "Loading traduction...";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={loadingTraduction}>
        <BrowserView>
          <Routes>
            <Route path="/" element={<HomeBView />} />
            <Route path="/home" element={<HomeBView />} />
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
            <Route path="/" element={<HomeBView />} />
            <Route path="/home" element={<HomeBView />} />
          </Routes>
        </TabletView>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
