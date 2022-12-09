import { useState } from "react";
import "./App.css";

function App() {
  const [emoji, setEmoji] = useState("😍");
  const [emojiColor, setEmojiColor] = useState("white")
  const [emojiSize, setEmojiSize] = useState(100);
  const [emojiDeg, setEmojiDeg] = useState(0);

  return (
    <>
      <div className="title-container">
        <h1 className="title">Feeling Kit 😊</h1>
      </div>

      <div className="emoji-editor-container">
         <div>
 
          <div className='main-emoji-container' style={{backgroundColor: emojiColor, transform: `rotate(${emojiDeg*3.6}deg)`}}>
            <div className="main-emoji-item" style={{fontSize: `${emojiSize * 2}px`}}>
            {emoji}</div>


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
          <div className="colors-container">
            <div className="color-item bg-red" onClick={()=> {setEmojiColor("red")}}></div>
            <div className="color-item bg-black" onClick={()=> {setEmojiColor("black")}}></div>
            <div className="color-item bg-orange" onClick={()=> {setEmojiColor("orange")}}></div>
            <div className="color-item bg-green" onClick={()=> {setEmojiColor("green")}}></div>
            <div className="color-item bg-purple" onClick={()=> {setEmojiColor("purple")}}></div>
        </div>

        <div className="size-container">
         <input type="range" className="size-slider" onChange={(e)=>{setEmojiSize(e.target.value)}}/>
        </div>

        <div className="size-container">
         <input type="range" className="size-slider" onChange={(e)=>{setEmojiDeg(e.target.value)}}/>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
