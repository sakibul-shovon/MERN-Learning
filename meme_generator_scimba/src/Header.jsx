import React from 'react'
import trollFace from "./images/troll-face.png"
function Header() {
  return (
    <div>
      <header className="header">
            <img 
                src={trollFace} 
            />
            <h1>Meme Generator</h1>
        </header>
    </div>
  )
}

export default Header
