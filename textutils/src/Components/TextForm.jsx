import React , {useState} from 'react'


export default function TextForm(props) {
    const [text , setManu] = useState('manu')
    const handlechange = (event) => {
        setManu(event.target.value)
    }
    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setManu(newtext)
    }
    const handleLoClick = () => {  
        let newtext = text.toLowerCase();
        setManu(newtext)
    }
    return (
        <>
            <div className='container'>
                <div className="form">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" onChange={handlechange} value={text} placeholder="leave a comment here" rows={8} id="myBox"></textarea>
                    <button style={{marginTop:'10px'}} className="btn btn-success" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button style={{marginTop:'10px'}} className="btn btn-success mx-3" onClick={handleLoClick}>Convert to Uppercase</button>
                </div>
            </div>
            <div className="container" style={{marginTop:'10px'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length-1} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
  )
}