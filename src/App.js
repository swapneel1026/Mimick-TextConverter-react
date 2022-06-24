import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [uppercase, setUppercase] = useState(false);

  const convertHandler = () => {
    if (bold === true) {
      document.getElementById("span").style.fontWeight = "bold";
    } else {
      document.getElementById("span").style.fontWeight = "normal";
    }

    if (italic === true) {
      document.getElementById("span").style.fontStyle = "italic";
    } else {
      document.getElementById("span").style.fontStyle = "normal";
    }

    if (underline === true) {
      document.getElementById("span").style.textDecoration = "underline";
    } else {
      document.getElementById("span").style.textDecoration = "none";
    }
    if (uppercase === true) {
      setText(text.toUpperCase());
    } else {
      setText(text.toLowerCase());
    }
  };
  return (
    <div className="App">
      <h2>Text Converter</h2>
      <div>
        <label htmlFor="bold">BOLD</label>
        <input
          type="checkbox"
          id="bold"
          value={bold}
          onChange={(e) => {
            setBold(e.target.checked);
          }}
        />
      </div>
      <div>
        <label htmlFor="italic">ITALIC</label>
        <input
          type="checkbox"
          id="italic"
          value={italic}
          onChange={(e) => {
            setItalic(e.target.checked);
          }}
        />
      </div>
      <div>
        <label htmlFor="underline">UNDERLINE</label>
        <input
          type="checkbox"
          id="underline"
          value={underline}
          onChange={(e) => {
            setUnderline(e.target.checked);
          }}
        />
      </div>
      <div>
        <label htmlFor="uppercase">UPPERCASE</label>
        <input
          type="checkbox"
          id="uppercase"
          value={uppercase}
          onChange={(e) => {
            setUppercase(e.target.checked);
          }}
        />
      </div>
      <input
        style={{ width: "60%", marginTop: "1rem" }}
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        onClick={convertHandler}
        style={{ marginTop: "1rem" }}
      >
        Convert
      </button>
      <p>Output:</p>
      <span id="span" style={{ backgroundColor: "black", color: "white" }}>
        {text}
      </span>
    </div>
  );
}

export default App;
