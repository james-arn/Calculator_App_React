import { useState } from 'react'
import { create, all } from 'mathjs'

const App = ()=>{
  // collection of tasks, need an array.
  const [input, setInput] = useState("")

  const buttons = [
    "7", "8", "9", "C",
    "4", "5", "6", "/",
    "1", "2", "3", "-",
    "0", "+", "*", "="
  ]

  const addHandler = (button) =>{
console.log(button)
let newArr = [...input]
newArr.push(input)
console.log(newArr)
setInput(newArr)
// math.evaluate(newArr)
}
//concat untilclick equals which will then evaluate (add). Then the c will clear string.
// IF user todenst lcick on c or equals then it adds to input.


  
  // math.evaluate('12 /')

  return (
    <div>
      <h1>Calculator</h1>
    {buttons.map ((item, index)=>{
      return (
      <button key={index} value={item} onClick={()=>addHandler(item)} >{item}</button>
    )}) }
    </div>
  )
}

export default App;
