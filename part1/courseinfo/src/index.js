import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
 
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }

  
  const part3 = {
    name: 'State of a component ',
    exercises: 14
  }
  
   
  return (
    <div>
      <Header course = {course} />
      <Content part1= {part1.name} ex1 = {part1.exercises} 
                part2= {part2.name} ex2 = {part2.exercises}
                part3= {part3.name} ex3 = {part3.exercises}/>
      <Total ex1 = {part1.exercises} ex2 = {part2.exercises} ex3 = {part3.exercises} />
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
    <Part part = {props.part1} exercise = {props.ex1} />
    <Part part = {props.part2} exercise = {props.ex2} />
    <Part part = {props.part3} exercise = {props.ex3} />
    </>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <>
    <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
    </>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <>
    <p>{props.part} {props.exercise}</p>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))