import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <Navbar title='hello' aboutText='About TextUtills'/>
      {/* <TextForm heading='Enter the text here'/> */}
      <About />
    </>
  );
}

export default App;
