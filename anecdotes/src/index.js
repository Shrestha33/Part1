import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button=({onClick,text})=>{
  return (
    <button onClick={onClick}>
      {text}
      </button>
  )
}

const Display=({anecdote,vote})=>{
  return(
    <div>
      {anecdote}
      <p>has {vote} votes</p>
    </div>
  )
}
const App = (props) => {
  
  const [selected, setSelected] = useState(0)
  const [votes,setVotes]=useState(Array(props.anecdotes.length).fill(0))

  const handleSelect=()=>{
    var num=selected
    while (num===selected){
     num=Math.floor(Math.random() * (props.anecdotes.length - 0) + 0)
    }
    setSelected(num)
    
  }
  const handleVote=()=>{
    const copy=[...votes]
    copy[selected]+=1
    setVotes(copy)
    
  }
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Display anecdote={props.anecdotes[selected]} vote={votes[selected]} />
      <Button onClick={handleVote} text="vote" />
      <Button onClick={handleSelect} text="next anecdote" />
     
      {(()=>{
        if (Math.max(...votes)===0)
        {
          return <p>No votes given</p>
        }
        else{ 
        return(
          <div>
             <h1>Anecdote with most votes</h1>
             <p>{props.anecdotes[votes.indexOf(Math.max(...votes))]}</p>
             <p>has {Math.max(...votes)} votes</p>
            </div>
        )
        }
      })()}
      
      
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)