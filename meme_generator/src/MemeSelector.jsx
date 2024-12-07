import React from "react";

const MemeSelector = ({ memes, onSelect }) => {
  return (
    <div>
      <h2>Select a Meme Template</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {memes.map((meme) => (
          <img
            key={meme.id}
            src={meme.url}
            alt={meme.name}
            style={{ width: "200px", margin: "10px", cursor: "pointer" }}
            onClick={() => onSelect(meme)} // Pass selected meme to parent
          />
        ))}
      </div>
    </div>
  );
};

export default MemeSelector;
