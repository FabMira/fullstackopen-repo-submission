import { useState } from 'react'


const Button = (props) => {
  const { handleClick, text} = props
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statisticline = (props) => {
  console.log(props)
  const { text, value, unit} = props
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{text}</td>
            <td>{value} {unit}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const calcAvg = (g, b, t) => ((g - b) / t)

const calcPositive = (g, t) => ((g / t) * 100)

const Statistics = (props) => {
  const {stat} = props
  const average = calcAvg(stat[0], stat[2], stat[3])
  const positive = calcPositive(stat[0], stat[3])
  if (stat[3] === 0) {
    return (
    <div>
      <h2>Statistics</h2>
      <p>No feedback given</p>
    </div>
    )
  }
    return (
      <div>
        <h2>Statistics</h2>
          <Statisticline text='good' value={stat[0]} unit='' />
          <Statisticline text='neutral' value={stat[1]} unit='' />
          <Statisticline text='bad' value={stat[2]} unit='' />
          <Statisticline text='all' value={stat[3]} unit='' />
          <Statisticline text='average' value={average} unit='' />
          <Statisticline text='positive' value={positive} unit='%' />
      </div>
    )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const stats = [good, neutral, bad, total]

  const handleGoodClick = () => {
    const updateGood = good + 1
    console.log('new good count= ', updateGood)
    setGood(updateGood)
    setTotal(updateGood + bad + neutral)
    /*setAvg((updateGood - bad)/total)
    setPositive(updateGood/total)*/
  }

  const handleBadClick = () => {
    const updateBad = bad + 1
    console.log('new bad count= ', updateBad)
    setBad(updateBad)
    setTotal(updateBad + good + neutral)
   /* setAvg((good - updateBad)/total)
    setPositive(good/total)*/
  }

  const handleNeutralClick = () => {
    const updateNeutral = neutral + 1
    console.log('new neutral count= ', updateNeutral)
    setNeutral(updateNeutral)
    setTotal(updateNeutral + good + bad)
    /*setAvg((good - bad)/total)
    setPositive(good/total)*/
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Statistics stat={stats} />
    </div>
  )
}

export default App