import React, { useContext } from "react";
import "./Message.scss";

// Contexts
import { ThemeContext } from "../../App";

function Message({ children }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <p className={`message ${theme}`}>{children}</p>
    </div>
  );
}

export default Message;
