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


  return (
    <>
    <div className="container mt-5">
        <div className="form-floating">
        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "300px" }} value={text} onChange={handleOnChange}></textarea>
        <button className="btn btn-primary mt-3" type="submit" onClick={handleUpClick}>Change Case</button>
        </div>
    </div>
    </>
  )
}
