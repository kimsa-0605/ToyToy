import React from "react";
import "./Loading.css";

const Loading = () => {
  const text = "ToyToy";

  return (
    <div className="loading-container">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="loading-char"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default Loading;