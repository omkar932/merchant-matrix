import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/layout/Header/Header";
import { applyTheme } from "./theme/utils";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";

const App: React.FC = () => {
  useEffect(() => {
    applyTheme();
  }, []);
  return (
    <Router>
      <Header />
      <div className="flex z-0 pt-12">
        <Sidebar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </div>
    </Router>
  );
};

export default App;
