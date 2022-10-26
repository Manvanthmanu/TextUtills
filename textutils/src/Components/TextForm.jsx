import React , {useState} from 'react'


export default function TextForm(props) {
    const [text , setManu] = useState('manu')
    const handlechange = (event) => {
        setManu(event.target.value)

    }
    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setManu(newtext)
        props.showalert("Converted to UpperCase" , "success")
    }
    const handleLoClick = () => {  
        let newtext = text.toLowerCase();
        setManu(newtext)
    }
    const handleClearClick = () => {
        let newtext = '';
        setManu(newtext)
    }
    const handleCopy = () => {
        
        navigator.clipboard.writeText(text);
    }

    const removeSpaces = ()=>{
        let newtext = text.split(/[ ]+/);
        setManu(newtext.join(" "))
    }
    return (
        <>
            <div className='container'>
                <div className="form">
                    <h2>{props.heading}</h2>
                    <textarea className="form-control" onChange={handlechange} value={text} placeholder="leave a comment here" rows={8} id="myBox"></textarea>
                    <button style={{marginTop:'10px'}} className="btn btn-success" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button style={{marginTop:'10px'}} className="btn btn-success mx-3" onClick={handleLoClick}>Convert to Uppercase</button>
                    <button style={{marginTop:'10px'}} className="btn btn-success " onClick={handleClearClick}>Clear</button>
                    <button style={{marginTop:'10px'}} className="btn btn-success  mx-3 " onClick={handleCopy}>copy</button>
                    <button style={{marginTop:'10px'}} className="btn btn-success  mx-3 " onClick={removeSpaces}>removeSpaces</button>
                </div>
            </div>
            <div className="container" style={{marginTop:'10px'}}>
                <h3>Your text summary</h3>
                <p>{text.split(" ").length-1} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h4>Preview</h4>
                <p>{text.length===0?'Please enter your text to preview':text}</p>
            </div>
        </>
  )
}