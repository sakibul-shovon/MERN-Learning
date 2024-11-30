import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>

      <div className="fixed flex justify-center bottom-80 left-0 right-0 px-2">
        <div className="flex justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="bg-red-500 outline-none px-4 py-1 rounded-full text-white shadow-lg"
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className="bg-green-500 outline-none px-4 py-1 rounded-full text-white shadow-lg"
          >
            Green
          </button>

          <button
            onClick={() => setColor("blue")}
            className="bg-blue-600 outline-none px-4 py-1 rounded-full text-white shadow-lg"
          >
            Blue
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="bg-yellow-400 outline-none px-4 py-1 rounded-full text-white shadow-lg"
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("pink")}
            className="bg-pink-400 outline-none px-4 py-1 rounded-full text-white shadow-lg"
          >
            Pink
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
