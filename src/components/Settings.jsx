import React, { useState } from "react";

const Settings = ({ darkMode, setDarkMode, fontSize, setFontSize }) => {
  const handleCheckboxChange = (size) => {
    setFontSize(size);
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={
        darkMode ? "bg-gray-900 text-white p-4" : "bg-white text-black p-4"
      }
    >
      <div>
        <h6 className="">Text</h6>

        <label>
          <input
            type="checkbox"
            checked={fontSize == "normal"}
            onChange={() => handleCheckboxChange("normal")}
          />
          Normal
        </label>

        <br />

        <label>
          <input
            type="checkbox"
            checked={fontSize == "large"}
            onChange={() => handleCheckboxChange("large")}
          />
          Large
        </label>
      </div>

      <div className="mt-4">
        <h6>Theme</h6>
        <button
          onClick={toggleDarkMode}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default Settings;
