import React, { useState } from "react";
import "./App.css";
// pages
import BudgetContainer from "./pages/BudgetContainer";

function App() {
  //edit theme
  const [theme, setTheme] = useState("");

  // handle theme
  const handleTheme = () => {
    theme === "" ? setTheme("dark") : setTheme("");
    console.log(theme);
  };
  return (
    <body style={{ height: "100vh" }} className={`${theme}`}>
      <BudgetContainer theme={theme} handleTheme={handleTheme} />
    </body>
  );
}

export default App;
