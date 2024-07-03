import React from "react";

const Arrow = ({ direction, onClick }) => {
  const leftArrow = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="white-arrow-left clickable"
      onClick={onClick} 
    >
      <path
        d="M16 8L8 12l8 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const rightArrow = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="white-arrow-right clickable"
      onClick={onClick} 
    >
      <path
        d="M8 8L16 12l-8 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const arrowContent = direction === "left" ? leftArrow : rightArrow;

  return arrowContent; 
};

export default Arrow;
