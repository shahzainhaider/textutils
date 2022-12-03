import React, { useState } from "react";
// import { Navigate } from "react-router-dom";

export default function TextForm(props) {

  const [text, setText] = useState("");

  const uppercase = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert('Converted to UpperCase','success')
  };


  const lowercase = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert('Converted to LowerCase','success')
  };


  const removeExtra = () => {
    let newtext = text.split(/[ ]+/)
    setText(newtext.join(" "));
    props.showalert('Removed Extra Spaces','success')
  };


  const copyText = () => {
    let newtext = document.getElementById('mybox')
    newtext.select()
    navigator.clipboard.writeText(newtext.value)
    props.showalert('Removed Extra Spaces','success')
  };

  // const copytext=(text)=>{
  //   let newtext=navigator.clipboard.writeText(text)
  //   setText(newtext)
  // };

  const change = (event) => {
    setText(event.target.value);
  };

  const del = () => {
    let deltext ='';
    setText(deltext);
    props.showalert('Text Deleted','success')
  };

  return (
    <>
      <div className={`mb-3 container my-3 text-${props.mode==='light'?'dark':'light'}`}>
        <h2>Enter Your Text</h2>
        <textarea
          className="form-control"
          id="mybox"
          rows="6"
          onChange={change}
          value={text}
          style={{backgroundColor:props.mode==='light'?'white':'#171717',
                  color:props.mode==='light'?'black':'white'}}
        ></textarea>
        <button className="btn btn-primary mx-2 my-2 " onClick={uppercase}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-2 my-2 " onClick={lowercase}>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary mx-2 my-2 " onClick={removeExtra}>
          Remove Extra Space
        </button>
        <button className="btn btn-primary mx-2 my-2 " onClick={copyText}>
          Copy Text
        </button>
        {/* <button className="btn btn-primary mx-2 " onClick={copytext}>
          Copy Text
        </button> */}
        <button className="btn btn-danger mx-2 my-2 " onClick={del}>
          Delete
        </button>
      </div>
      <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
        <h2>Your Text Counter</h2>
        <p>Total Words:<b> {text.split(' ').length}</b></p>
        <p>Total Characters:<b> {text.length}</b></p>

      </div>
    </>
  );
}
