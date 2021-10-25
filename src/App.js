import { useState } from 'react'
import { evaluate } from 'mathjs'
import "../src/index.css"

const App = ()=>{
  const [input, setInput] = useState("")
  const [result, setResult] = useState("")


  const buttons = [
    "7", "8", "9", "C",
    "4", "5", "6", "/",
    "1", "2", "3", "-",
    "0", "+", "*", "="
  ]

  const addHandler = (button) =>{
setInput(input + button);
if (button === "=") {
  setResult(evaluate(input));
setInput(input)
} else if (button === "C") {
  setInput("")
  setResult("")
}
}

  return (
    <div className="container">
      <h1>Calculator</h1>
      <div className="display">
      <h2>{result || "0"}</h2>
      ({input || "0"})
      </div>
    {buttons.map ((button, index)=>{
      return (
      <button key={index} value={button} onClick={()=>addHandler(button)} >{button}</button>
    )}) }
    </div>
  )
}

export default App;
