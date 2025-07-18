import React from "react";

const baseStyle = {
  background: "#5ff5e8ff",
  border: "2px solid #282736ff",
  fontSize: "2rem",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
  transition: "transform 0.2s ease, box-shadow 0.3s ease",
};

const winningStyle = {
  animation: "flashWin 0.6s ease-in-out infinite",
  border: "2px solid #fff000",
  zIndex: 10,
};

const Square = ({ value, onClick, isWinning }) => {
  const combinedStyle = isWinning
    ? { ...baseStyle, ...winningStyle }
    : baseStyle;

  return (
    <button style={combinedStyle} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;


