import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <h1>TODOS</h1>
      </header>
      <div>
        <div>
          <input />
          <button>Add todo</button>
        </div>
        <div>
          <ul>
            <li>
              <span>Go to ABC party</span>
              <button>x</button>
            </li>
          </ul>
          <button>Clear all</button>
        </div>
      </div>
    </div>
  )
}

export default App
