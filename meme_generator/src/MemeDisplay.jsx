import React from "react";

const MemeDisplay = ({ meme }) => {
  return (
    <div>
      <h2>Your Meme</h2>
      <img src={meme} alt="Generated Meme" style={{ width: "400px" }} />
      <a href={meme} download="meme.png">
        <button>Download Meme</button>
      </a>
    </div>
  );
};

export default MemeDisplay;
