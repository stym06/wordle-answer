import React from 'react'
import MyAppBar from '../components/AppBar'
import MyWord from '../components/Word'
import MyForm from '../components/MyForm'
import getWord from '../utils/getWord'

export default function Home() {
  const [date, setDate] = React.useState(null);
  const [slNum, setSlNum] = React.useState(0);

  console.log("slNum", slNum);

  const word = getWord(date, slNum);

  return (
    <div id="parent-container">
      <MyAppBar>
        <MyForm date={date} setDate={setDate} slNum={slNum} setSlNum={setSlNum}/>
        <MyWord a={word[0]} b={word[1]} c={word[2]} d={word[3]} e={word[4]}/>
      </MyAppBar>
    </div>
  )
}
