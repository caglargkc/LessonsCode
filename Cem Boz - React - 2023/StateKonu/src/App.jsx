import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState(0)


  return (
    <>
      <div className='App'>
        <button onClick={()=>{setValue((value) => value + 1)}}>Kurs Ekle</button>
        <div>Kurs Sayısı {value}</div>
      </div>
    </>
  )
}

export default App
