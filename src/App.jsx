import React, { useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Sidebar, Footer, ThemeSettings } from "./Components";
import {
  Athr,
  Campaigns,
  Employees,
  ErrorBoundary,
  Users,
  Kanban,
  Editor,
  Calendar,
  ColorPicker,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorMapping,
  Pyramid,
  Stacked,
} from "./Pages";
import "./App.css";
import { useStateContext } from "./Contexts/ContextProvider.jsx";

function App() {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
    isClicked,
  } = useStateContext();

  // Debug currentMode
  useEffect(() => {
    console.log("Current Mode:", currentMode);
  }, [currentMode]);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <HashRouter>
        <div className="flex relative dark:bg-[#20232a]">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-2xl p-3 hover:drop-shadow-xl hover:bg-[#f7f7f7] text-white cursor-pointer"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {/* Sidebar */}
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-[#33373e] bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 bg-[#33373e]">
              <Sidebar />
            </div>
          )}
          {/* Main Content */}
          <div
            className={`dark:bg-[#20232a] bg-[#fafbfb] min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-[#fafbfb] dark:bg-[#20232a] navbar w-full">
              <Navbar />
            </div>
            {/* Main Content Area */}
            <div>
              {themeSettings && <ThemeSettings />}
              <Routes>
                {/* Athr Dashboard */}
                <Route path="/" element={<Athr />} />
                <Route path="/athr" element={<Athr />} />
                {/* Athr Pages */}
                <Route path="/campaigns" element={<Campaigns />} />
                <Route
                  path="/employees"
                  element={
                    <ErrorBoundary>
                      <Employees />
                    </ErrorBoundary>
                  }
                />
                <Route path="/users" element={<Users />} />
                {/* Athr Apps */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />
                {/* Athr Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
