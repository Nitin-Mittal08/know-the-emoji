import React, { useState } from "react";
import "./styles.css";
var emojiDictonary = {
  "❤️": "Red Heart",
  "😊": "Smiling",
  "😂": "Laughing",
  "😐": "Neutral",
  "🥳": "Celebration",
  "😠": "Angry",
  "🤔": "Thinking",
  "✌": "Victory",
  "👏": "Clapping",
  "😉": "Winking"
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
    } else meaning = "We don't have this emoji in our DB😢";
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictonary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>What's that Emoji???🤔</h1>
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
