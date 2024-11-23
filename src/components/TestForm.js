import React, {useState} from 'react'

export default function TestForm(props) {
const handleUpClick=() =>{
    console.log('uppercase button clicked ' + text);
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showAlert("converted to Uppercase", "success");
}
const handleLowClick=() =>{
    console.log('lowercase button clicked ' + text);
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showAlert("converted to Lowercase", "success");
}


const handleCaptialiseClick=() =>{
    console.log('Captialise button clicked ' + text);
    let newtext="";
    let ntext = text.split(" ");
    ntext.forEach(element => {
        //console.log(element);
        newtext = newtext + element.charAt(0).toUpperCase()+ element.slice(1) + " ";
        console.log(newtext);
        props.showAlert("converted to Captialise case", "success");
    }); 
    newtext= newtext.trim();
    // (let i=0;i<ntext.length;i++){
    //     newtext=newtext + ntext[i].charAt(0).toUpperCase;
    // }
    //console.log(ntext);
    setText(newtext);
}
const handleClear=() =>{
    console.log('clear text button clicked ' + text);
    let newtext="";
    setText(newtext);
    props.showAlert("All Clear", "success");
}

const handleCopy=() =>{
    console.log('copy text button clicked ' + text);
    var text1= document.getElementById("myBox");
    text1.select();
    navigator.clipboard.writeText(text1.value);
    props.showAlert("Text Copied!", "success");
}

const handleOnChange=(event) =>{
    console.log('handleOnChange');
    setText(event.target.value);
}
    const [text, setText]= useState("");
    //setText("textdalo");
  return (
    <>    
    <div className='container' style={{color : props.mode==='dark'?'white':'black'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'grey':'white',  color : props.mode==='dark'?'white':'black'}} id="myBox" rows="8" />
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert To UPPERCASE</button>
        <button className='btn btn-primary mx-3' onClick={handleLowClick}>Convert To lowercase</button>
        <button className='btn btn-primary mx-3' onClick={handleCaptialiseClick}>Convert To Captialise</button>
        <button className='btn btn-primary mx-3' onClick={handleClear}>Clear Text</button>
        <button className='btn btn-primary mx-3' onClick={handleCopy}>Copy Text</button>
    </div>
    <div className='container my-3' style={{color : props.mode==='dark'?'white':'black'}}>
    <h2>Your test summary</h2>
    <p> {text.split(" ").length} words and {text.length} characters</p>
    <p> {0.008* text.split(" ").length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter your text to pereview"}</p>
    </div>
    </>

  )
}
