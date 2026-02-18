import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CourseForm from './components/CourseForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-container'>
      <h1 style={{ fontSize: "2.5 rem", marginBottom:"2 rem", }}>My Course List</h1>

      <CourseForm />
    </div>
  )
}

export default App
