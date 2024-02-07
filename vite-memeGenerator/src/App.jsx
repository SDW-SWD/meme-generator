import { useState } from 'react'
import './App.css'
import Content from './components/content'
import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Header/>
      <Content/>
    </div>
      
  )
}

export default App
