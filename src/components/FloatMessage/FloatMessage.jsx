import React from "react";
import "./FloatMessage.scss";

function FloatMessage({ expenses }) {
  return (
    <div className="total">
      Total gastado:{" "}
      <span>
        $
        {expenses.reduce((acc, curr) => {
          return (acc += parseInt(curr.amount)); // we make sure it is a sum of numbers
        }, 0)}
      </span>
    </div>
  );
}

export default FloatMessage;
