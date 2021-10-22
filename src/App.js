import { useState } from 'react'
import { evaluate } from 'mathjs'

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
  setInput(result)
} else if (button === "C") {
  setInput("")
  setResult("")
}
}

  return (
    <div>
      <h1>Calculator</h1>
      <div className="display">
      <h2>{result || "0"}</h2>
      ({input || "0"})
      </div>
    {buttons.map ((item, index)=>{
      return (
      <button key={index} value={item} onClick={()=>addHandler(item)} >{item}</button>
    )}) }
    </div>
  )
}

export default App;
