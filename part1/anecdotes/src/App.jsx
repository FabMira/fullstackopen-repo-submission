import { useState } from 'react'

const Button = (props) => {
  const { handleClick, text} = props
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const [num, setNum] = useState(0)

  const randomState = () => {
    const minCeiled = Math.ceil(0)
    const maxFloored = Math.floor(7)
    let updateAnecdote = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
    console.log("present Value: ", selected)
    console.log("first value: " , updateAnecdote)
    if ( updateAnecdote == selected ) {
      updateAnecdote = updateAnecdote = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
      console.log("value after repetition: " , updateAnecdote)
    }
    setSelected(updateAnecdote)
  }


  return (
    <div>
      <h1>Anecdotes</h1>
      {anecdotes[selected]}<br></br>
      <Button handleClick={randomState} text="next anecdote" />
    </div>
  )
}

export default App