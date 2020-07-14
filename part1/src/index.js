import React from 'react'
import ReactDOM from 'react-dom'



const App = () => {
  const now = new Date()
  const a = 10
  const b = 20

  return(
    <>
      <Hello name = "kunle" age = {20}/>
      <p> {a} plus {b} is {a + b}</p>
    </>
  )
}

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
