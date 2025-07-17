import React from "react";

const style = {
  background: "#5ff5e8ff",
  border: "2px solid #282736ff",
  fontSize: "2rem",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
};

const Square = ({ value, onClick }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);

export default Square;