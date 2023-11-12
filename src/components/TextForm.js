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

    
}
const handleLoClick = ()=>{
    // console.log("upper case was clicked "  + text);
    let newText = text.toLowerCase();
    setText(newText)

    
}
const handleOnChange = (event)=>{
    // console.log("On Change");
    setText(event.target.value)
}
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3 my-2">
        {/* <label for="myBox" class="form-label"></label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
        </div>
    </div>
    <di className="container">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} word , {text.length} Characters</p>      
      <p>{0.008 * text.split(" ").length} Minutes take to read</p>     
      <h2>preview</h2> 
      <p>{text}</p>
    </di>
    </>
  )
}
