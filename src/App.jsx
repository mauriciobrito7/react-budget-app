import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// pages
import BudgetContainer from "./pages/BudgetContainer";

// Components
import Layout from "./components/Layout";

function App() {
  //edit theme
  const [theme, setTheme] = useState("dark");

  // handle theme
  const handleTheme = () => {
    theme === "" ? setTheme("dark") : setTheme("");
    console.log(theme);
  };
  return (
    <body style={{ height: "100vh" }} className={`${theme}`}>
      <BrowserRouter>
        <Layout theme={theme}>
          <Switch>
            <BudgetContainer theme={theme} handleTheme={handleTheme} />
            <Route exact path="/" component={BudgetContainer} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </body>
  );
}

export default App;
