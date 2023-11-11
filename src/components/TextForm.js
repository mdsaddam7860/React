import React, {useState} from 'react'



export default function TextForm(props) {
const [text, setText] = useState('Enter your text here');
// wrong way
// text = "new text";
// corect way
// setText = "new text"; 
const handleUpClick = ()=>{
    console.log("upper case was clicked "  + text);
    let newText = text.toUpperCase();
    setText(newText)

    
}
const handleOnChange = (event)=>{
    console.log("On Change");
    setText(event.target.value)
}
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="myBox" class="form-label"></label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
        </div>
    </div>
  )
}
