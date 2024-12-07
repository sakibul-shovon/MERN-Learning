import React, { useState, useEffect } from "react";
import axios from "axios";
import MemeSelector from "./MemeSelector";
import MemeEditor from "./MemeEditor";

const App = () => {
  const [memes, setMemes] = useState([]);
  const [selectedMeme, setSelectedMeme] = useState(null);

  useEffect(() => {
    axios.get("https://api.imgflip.com/get_memes").then((response) => {
      setMemes(response.data.data.memes);
    });
  }, []);

  return (
    <div>
      {!selectedMeme ? (
        <MemeSelector memes={memes} onSelect={setSelectedMeme} />
      ) : (
        <MemeEditor template={selectedMeme} onBack={() => setSelectedMeme(null)} />
      )}
    </div>
  );
};

export default App;
