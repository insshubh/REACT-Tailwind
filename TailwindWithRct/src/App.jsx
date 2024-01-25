import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Card,Card1} from '../Component/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card1 laptopname={" DELL G15"} />
      <Card />
      
    </>
  )
}

export default App
