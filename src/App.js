import { useState } from "react";
import "./App.css";

function App() {
  const [emoji, setEmoji] = useState("😍");

  return (
    <>
      <div className="title-container">
        <h1 className="title">Feeling Kit 😊</h1>
      </div>

      <div className="emoji-editor-container">
         <div>
          <div className="main-emoji-container" style={{backgroundColor: "pink"}}>
            <div className="main-emoji-item">{emoji}</div>
          </div>
          <div className="emoji-container">
            <div
              className="emoji" onClick={() => { setEmoji("😍"); }}>😍</div>

            <div className="emoji" onClick={() => { setEmoji("😘"); }} >😘</div>

            <div className="emoji" onClick={() => { setEmoji("😡"); }}>😡</div>

            <div className="emoji" onClick={() => { setEmoji("😭"); }}> 😭 </div>

            <div className="emoji" onClick={() => { setEmoji("😴"); }}> 😴</div>
          </div>
        </div>

        <div>
          <h1>Editor</h1>
          <div className="colors-container">
            <div className="color-item bg-red"></div>
            <div className="color-item bg-black"></div>
            <div className="color-item bg-orange"></div>
            <div className="color-item bg-sky"></div>
            <div className="color-item bg-purple"></div>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
