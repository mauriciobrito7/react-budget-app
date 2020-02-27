import React, { useContext } from "react";
import "./Message.scss";

// Contexts
import { ThemeContext } from "../../App";

function Message({ children }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <h3 className={`message ${theme}`}>{children}</h3>
    </div>
  );
}

export default Message;
