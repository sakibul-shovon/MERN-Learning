import React from "react";

function Box({ value, onClick }) {
  const style = value === "X" ? "box x" : "box o"; 
  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
}

export default Box;
