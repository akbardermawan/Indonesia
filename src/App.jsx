import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Articel from "./components/Articel";
import Settings from "./components/Settings";
import Author from "./components/Author";

const App = () => {
  const [fontSize, setFontSize] = useState("normal");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Navigation Sidebar */}
      <div className="hidden md:flex md:w-[30%] lg:w-[20%] bg-white dark:bg-gray-800 overflow-y-auto">
        <div className="sticky top-0 h-screen w-full">
          <Navigation />
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="w-full md:w-[70%] lg:w-[60%] overflow-y-auto h-screen">
        <Articel
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          fontSize={fontSize}
          setFontSize={setFontSize}
        />
      </div>

      {/* Settings Sidebar */}
      <div className="hidden lg:flex lg:w-[20%] bg-white dark:bg-gray-800 overflow-y-auto">
        <div className="sticky top-0 h-screen w-full">
          <Author />
          <Settings
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            fontSize={fontSize}
            setFontSize={setFontSize}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
