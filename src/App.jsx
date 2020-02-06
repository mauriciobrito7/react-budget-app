import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// pages
import BudgetContainer from "./pages/BudgetContainer";

// Components
import Layout from "./components/Layout";
import ExpenseNew from "./pages/ExpenseNew";

// Theme Context
export const ThemeContext = React.createContext();

// Initial Theme
const initialTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : "";

function App() {
  //edit theme
  const [theme, setTheme] = useState(initialTheme);

  // handle theme
  const handleTheme = () => {
    setTheme(prevValue => {
      const newValue = prevValue === "" ? "dark" : "";
      localStorage.setItem("theme", newValue);
      return newValue;
    });
  };

  return (
    <body style={{ height: "100vh" }} className={`${theme}`}>
      <BrowserRouter>
        <ThemeContext.Provider value={{ theme, handleTheme }}>
          <Layout>
            <Switch>
              {/* <BudgetContainer theme={theme} handleTheme={handleTheme} /> */}
              <Route exact path="/" component={BudgetContainer} />
              <Route exact path="/new" component={ExpenseNew} />
            </Switch>
          </Layout>
        </ThemeContext.Provider>
      </BrowserRouter>
    </body>
  );
}

export default App;
