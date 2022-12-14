import React, { useState } from "react";
import "./styles.css";
var emojiDictonary = {
  "â¤ï¸": "Red Heart",
  "ð": "Smiling",
  "ð": "Laughing",
  "ð": "Neutral",
  "ð¥³": "Celebration",
  "ð ": "Angry",
  "ð¤": "Thinking",
  "â": "Victory",
  "ð": "Clapping",
  "ð": "Winking"
};
var emojisWeKnow = Object.keys(emojiDictonary);
export default function App() {
  var [emoji, setEmoji] = useState("");
  var [meaning, setMeaning] = useState(
    "Interpretation of emoji will come here"
  );
  function inputEmojiHandler(emoji) {
    var userInput = emoji.target.value;
    if (userInput in emojiDictonary) {
      var meaning = emojiDictonary[userInput];
    } else meaning = "We don't have this emoji in our DBð¢";
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictonary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>What's that Emoji???ð¤</h1>
      <input onChange={inputEmojiHandler}></input>
      <div>{meaning}</div>
      <div style={{ margin: "1rem" }}>Emojis We Know</div>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ padding: "0.5rem", fontsize: "5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
