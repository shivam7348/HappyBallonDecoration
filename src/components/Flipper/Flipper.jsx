import React, { useState } from "react";
import "./Flipper.css"; // Import CSS file for styling

const CardFlipper = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`card-flipper ${isFlipped ? "flipped" : ""}`}
      onClick={handleClick}
    >
      <div className="card-front">{frontContent}</div>
      <div className="card-back">{backContent}</div>
    </div>
  );
};

export default CardFlipper;
