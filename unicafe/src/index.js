import React,{ useState } from 'react'
import ReactDOM from 'react-dom'

const Statics=(props)=>{
  return(
      <tr>
          <td>{props.text}</td>
          <td>{props.value}</td>
      </tr>
    
  )
  
}

const Button=({onClick,text})=>{
  return(
    <button onClick={onClick}>{text}</button>
  )
}
const App=()=>{
  const [good,setGood]=useState(0)
  const [neutral,setNeutral]=useState(0)
  const [bad,setBad]=useState(0)

  const all=good+neutral+bad
  const average=(good-bad)/all
  const positive=(good/all)*100
  

  const handleGoodClick=()=>setGood(good+1)
  
  const handleNeutralClick=()=>setNeutral(neutral+1)

  const handleBadClick=()=>setBad(bad+1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      
      <h1>Statics</h1>
      
      {(()=>{
        if (good===0 && neutral===0 && bad===0)
        {
          return <p>No feedback given</p>
        }
        else{ 
        return(
          <div>
            <table>
              <tbody>
            <Statics text="good" value={good} />
            <Statics text="neutral" value={neutral} />
            <Statics text="bad" value={bad} />
            <Statics text="all" value={all} />
            <Statics text="average" value={average} />
            <Statics text="positive" value={positive.toString().concat('%')} />
            </tbody>
            </table>
            </div>
        )
        }
      })()}
        
      
      </div>
    
  )
}

ReactDOM.render(<App />,document.getElementById('root'))