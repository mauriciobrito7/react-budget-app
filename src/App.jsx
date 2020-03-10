import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// pages
import Expenses from "./pages/Expenses";
import ExpenseNew from "./pages/ExpenseNew";

// Components
import Layout from "./components/Layout/Layout";

// Contexts
import ExpenseContext from "./context/ExpenseContext/ExpenseContext";
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
          <ExpenseContext>
            <Layout>
              <Switch>
                {/* <BudgetContainer theme={theme} handleTheme={handleTheme} /> */}
                <Route exact path="/" component={Expenses} />
                <Route exact path="/new" component={ExpenseNew} />
                <Route exact path="/new/:expenseId" component={ExpenseNew} />
              </Switch>
            </Layout>
          </ExpenseContext>
        </ThemeContext.Provider>
      </BrowserRouter>
    </body>
  );
}

export default App;
