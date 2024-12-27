import React from "react";

function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white", // Fixed the white color issue
  };

  return (
    <button style={styles} className="die" onClick={props.hold}>
      {props.value}
    </button>
  );
}

export default Die;
