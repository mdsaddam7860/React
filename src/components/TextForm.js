// import { getByTestId } from '@testing-library/react';
import React, {useState} from 'react'



export default function TextForm(props) {
const [text, setText] = useState('Enter your text here');
// wrong way
// text = "new text";
// corect way
// setText = "new text"; 
const handleUpClick = ()=>{
    // console.log("upper case was clicked "  + text);
    let newText = text.toUpperCase();
    setText(newText)
  props.showAlert("Text has been converted to upper Case","success")
    
}
const handleLoClick = ()=>{
    // console.log("upper case was clicked "  + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Text has been converted to lower Case","success")

    
}
// const handleCapClick = ()=>{
//     console.log("upper case was clicked "  + text);

//     let newText = text.substr();

//     setText(newText)

    
// }
const handleExtraSpaces = ()=>{
  let newText  = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra space has been removed","success")

}

const handleCopy = ()=>{
    const text = document.getElementById("myBox")  
    text.select();
    navigator.clipboard.writeText(text.value) 
  props.showAlert("Text has been copied to clipboard","success")

}
const handleOnChange = (event)=>{
    // console.log("On Change");
    setText(event.target.value)
}

  return (
    <>
    <div className='container'style={{color:props.mode==='dark'?'white':'grey'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3 my-2">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" style={{background:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'grey'}} rows="8"></textarea>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy to clipboard</button>
        {/* <button className="btn btn-primary mx-2 my-2" onClick={handleCapClick}>Capitlized Case</button> */}
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
    </div>
    <di className="container" style={{color:props.mode==='dark'?'white':'grey'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} word , {text.length} Characters</p>      
      <p>{0.008 * text.split(" ").length} Minutes take to read</p>     
      <h2>preview</h2> 
      <p>{text.length>0? text : "Enter Something to preview here" }</p>
    </di>
    </>
  )
}