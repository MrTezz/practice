import React, { useState } from 'react';

export default function Textform() {
    const [text, setText] = useState("Enter Your Text");
    const handleOnChange = (event) =>{
        console.log("Handle On Change");
        setText(event.target.value);
    }

    const handleUpClick = () =>{
        console.log("Change case clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    }
    const handleCapitalizeClick = () => {
      let newText = text
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      setText(newText);
    }
    const handleSentenceCaseClick = () => {
      let newText = text
        .toLowerCase() // make everything lowercase first
        .split(". ")   // split sentences by ". "
        .map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1))
        .join(". ");
      setText(newText);
    }

    const handleRemoveSpacesClick = () => {
  let newText = text.split(/[ ]+/).join(" ");
  setText(newText.trim());
}
    const handleClearClick = () => {
  setText("");
}

    const totalTime = 0.008 * text.split(/\s+/).length;
    const minutes = Math.floor(totalTime);
    const seconds = Math.round((totalTime - minutes) * 60);

    let readingTime = "";
    if (minutes > 0){
      readingTime = `${minutes} Min ${seconds} Sec`;
    } else {
      readingTime = `${seconds} Sec`;  
    }


  return (
    <>
    <div className="container mt-5">
        <div className="form-floating">
        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "300px" }} value={text} onChange={handleOnChange}></textarea>
        <button className="btn btn-primary mt-3 me-2" type="submit" onClick={handleUpClick}>Uppercase</button>
        <button className="btn btn-primary mt-3 me-2" onClick={handleLoClick}>Lowercase</button>
        <button className="btn btn-primary mt-3 me-2" onClick={handleCapitalizeClick}>Capitalize Words</button>
        <button className="btn btn-primary mt-3 me-2" onClick={handleSentenceCaseClick}>Sentence Case</button>
        <button className="btn btn-primary mt-3 me-2" onClick={handleRemoveSpacesClick}>Remove Extra Spaces</button>
        <button className="btn btn-danger mt-3" onClick={handleClearClick}>Clear Text</button>

        </div>
    </div>
    <div className="container my-5">
      <h2 className='mb-4'>Text Summary</h2>
      <p><b>Count:</b> {text.split(/\s+/).length} words and {text.length} characters.</p>
      
      
      <p><b>Reading Time:</b> {readingTime}</p>
    </div>
    </>
  )
}
