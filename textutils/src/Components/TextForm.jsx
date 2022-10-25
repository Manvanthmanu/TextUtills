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
    return (
    <div className='container'>
        <div className="form">
            <h1>{props.heading}</h1>
            <textarea className="form-control" onChange={handlechange} value={text} placeholder="leave a comment here" rows={8} id="myBox"></textarea>
            <button className="btn btn-success" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    </div>
  )

}
