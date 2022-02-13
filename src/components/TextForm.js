import React, { useState } from 'react';

export default function TextForm(props) {
  
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success")

  }
  const handleOnClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success")
  }
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared All", "success")
  }
  const handleFLCapitalClick = () => {
    let newText = text.replace(/^(.)/g, text[0].toUpperCase());
    setText(newText);
    props.showAlert("Formatted document", "success")
  }

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success")
  }
  
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces Removed", "success")
  }

  const handleChange = (event) => {
    setText(event.target.value);
  }

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color: props.mode === "dark" ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" value={text} onChange={handleChange} style={{backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} rows="9" placeholder="Enter text here"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleOnClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear All</button>
        <button className="btn btn-primary mx-1" onClick={handleFLCapitalClick}>Format Doc</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

      </div>

      <div className="container my-3" style={{color: props.mode === "dark" ? 'white' : 'black'}}>
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters.</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
