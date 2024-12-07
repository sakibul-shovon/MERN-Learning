import React, { useState } from "react";

const MemeEditor = ({ template, onBack }) => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  const generateMeme = () => {
    const url = `https://api.imgflip.com/caption_image?template_id=${template.id}&username=yourUsername&password=yourPassword&text0=${topText}&text1=${bottomText}`;
    console.log("Generated meme URL:", url); // Replace with actual API call
  };

  return (
    <div>
      <button onClick={onBack}>Back to Templates</button>
      <h2>Edit Meme: {template.name}</h2>
      <img src={template.url} alt={template.name} style={{ width: "300px" }} />
      <div>
        <input
          type="text"
          placeholder="Top Text"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
        />
        <input
          type="text"
          placeholder="Bottom Text"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
        />
        <button onClick={generateMeme}>Generate Meme</button>
      </div>
    </div>
  );
};

export default MemeEditor;
