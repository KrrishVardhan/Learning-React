import { useState } from 'react'
import {useDispatch} from 'react-redux'
function AddTodo() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = ()=>{
    e.preventDefault()
  }
  return (
    <div>
      
    </div>
  )
}

export default AddTodo