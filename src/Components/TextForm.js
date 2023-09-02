import React, {useState} from 'react'
export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper case","success");
    }
    const handleLoClick = ()=>{
      // console.log("Uppercase was clicked");
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lower case","success");
  }
  const handleClearClick = () =>{
    setText("")
    props.showAlert("Cleared text","success");
  }
  const handleCopyClick = () =>{
    let textcopy = text;
    navigator.clipboard.writeText(textcopy);
    props.showAlert("Copied to clipboard","success");
  }
  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed Extra Spaces","success");
  }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    const styles = {
      border: "2px solid green",
      backgroundColor: props.mode==='dark'?'#555555':'white',
      color: props.mode==='dark'?'white':'black'
    }
  return (
    <>
    <h1>{props.heading}</h1>
    <div className="container">
    <textarea className="form-control" style = {styles} onChange ={handleOnChange} value = {text} id="myBox" rows={12} />
    <button type="button" className={`btn btn${(props.mode==='dark')?'':'-outline'}-info my-2`} onClick = {handleUpClick}>Convert to uppercase</button>
    <button type="button" className={`btn btn${(props.mode==='dark')?'':'-outline'}-secondary mx-3`} onClick = {handleLoClick}>Convert to Lowercase</button>
    <button type="button" className={`btn btn${(props.mode==='dark')?'':'-outline'}-success mx-3`} onClick = {handleClearClick}>Clear text</button>
    <button type="button" className={`btn btn${(props.mode==='dark')?'':'-outline'}-warning mx-3`} onClick = {handleCopyClick}>Copy text</button>
    <button type="button" className={`btn btn${(props.mode==='dark')?'':'-outline'}-danger mx-3`} onClick = {handleExtraSpaces}>Remove extra spaces</button>
  </div>
  <div className="container">
    <h2>Your text Summary</h2>
    <p>{text.split(/[ ]+/).length} words {text.length} characters</p>
    <p>{text.split(/[ ]+/).length*0.008} minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:'Enter your text above to preview here'}</p>
  </div>
  </>
  )
}
