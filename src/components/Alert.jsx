import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./Alert.scss";

// Contexts
import { ThemeContext } from "../App";

const Alert = ({ type, text }) => {
  // Contexts
  const { theme } = useContext(ThemeContext);
  // alert
  const [alert, setAlert] = useState({
    show: false
  });

  return (
    <>
      {ReactDOM.createPortal(
        <div className={`alert alert-${type} ${theme}`}>{text}</div>,
        document.getElementById("alert")
      )}
    </>
  );
};

export default Alert;
