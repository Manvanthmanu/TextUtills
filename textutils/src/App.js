import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  const [Mode,setMode] = useState('light') // wether dark mode is enabled or not 
  const [alert,setAlert] = useState(null)
  const showalert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode= ()=>{
    if(Mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='black';
      document.body.style.color='white'
      showalert('Dark mode has been enabled','success')
    }else{
      setMode('light')
      document.body.style.backgroundColor='white'
      document.body.style.color = 'black'
      showalert('Dark mode has been dissabled' , 'danger')
    }
  }

  return (
    <>
      <Navbar title='TextUtills' aboutText='About TextUtills' mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <TextForm showalert={showalert} heading='Enter the text here'/>
      {/* <About /> */}
    </>
  );
}

export default App;
