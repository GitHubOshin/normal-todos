import { useState } from 'react'
import './App.css'

function App() {
  const [inputTodo, setInputTodo] = useState('')
  const [todos, setTodos] = useState([])

  function handleOnChangeInput(e) {
    setInputTodo(e.target.value)
    console.log(inputTodo)
  }

  function handleAddtodo() {
    if (inputTodo.length > 0) {
      setInputTodo('')
      setTodos([...todos, inputTodo])
      console.log(todos)
    } else {
      return alert('Type your new todo')
    }
  }

  function handleDeleteTheTodo(index) {
    let alltodos = [...todos]
    alltodos.splice(index, 1)
    setTodos(alltodos)
  }

  function handleDeleteAll() {
    setTodos([])
  }

  return (
    <div className="App">
      <header>
        <h1>TODOS</h1>
      </header>
      <div>
        <div>
          <input value={inputTodo} onChange={handleOnChangeInput} />
          <button onClick={handleAddtodo}>Add todo</button>
        </div>
        <div>
          <ul>
            {todos.map((todo, index) => {
              return (
                <li key={index}>
                  <span>{todo}</span>
                  <button
                    onClick={function () {
                      handleDeleteTheTodo(index)
                    }}
                  >
                    x
                  </button>
                </li>
              )
            })}
          </ul>
          <button onClick={handleDeleteAll}>Delete all</button>
        </div>
      </div>
    </div>
  )
}

export default App
