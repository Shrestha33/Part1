import React from 'react'
import ReactDOM from 'react-dom'

const Header= (props) => {
  return (
    <div>
      <p>Course is {props.course}</p>
    </div>
  )
}
const Content=(props)=> {
  return (
    <div>
     <Part name={props.parts[0].name} exercise={props.parts[0].exercises} />
     <Part name={props.parts[1].name} exercise={props.parts[1].exercises} />
     <Part name={props.parts[2].name} exercise={props.parts[2].exercises} />
    </div>
  )
}
const Part=(props)=> {
  return(
    <>
     <p>{props.name} has {props.exercise} exercises</p>
    </>
  )
}
const Total=(props)=>{
  return (
    <div>
      <p>Total number of exercises is {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</p>
    </div>
  )
}
const App = () => {
  const course = {
    name:'Half Stack application development',
    parts:[
  {
    name:'Fundamentals of React',
    exercises:10
  },
  {
    name:'Using props to pass data',
    exercises:7
  },
  {
    name:'State of a component',
    exercises:14
  }
  ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))