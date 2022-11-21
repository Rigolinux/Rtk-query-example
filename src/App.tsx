import { useState } from 'react'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm';



function App() {
  const [count, setCount] = useState(0)
  console.log('render')
  return (
    <div>
      <TaskForm />
      <TaskList />
    </div>
  )
}

export default App
