import { useState, useEffect } from 'react'
import Navbar from './component/Navbar.jsx'
import Footer from './component/Footer'
import Header from './component/Header.js'
import TodosListComponent from './component/TodosListComponent'
import Form from './component/Form.js'
import './App.css';

function App() {
  // React State
  const [userInput, setUserInput] = useState("")
  const [selectStatus, setSelectStatus] = useState("all")
  const [todos, setTodos] = useState([])
  const [filteredTodos, setFilteredTodos] = useState([])
  // function

  const selectHandler = (e) => {
    setSelectStatus(e.target.value)
  }


  const saveTodos = () => {
    if (localStorage.getItem('localtodos') != undefined) {
      const data = localStorage.setItem('localtodos',JSON.stringify(todos))
    }
  }
  const getTodos = () => {
    if (localStorage.getItem('localtodos') === undefined) {
      localStorage.setItem('localtodos', JSON.stiringify([]))
    }
    else {
      const data = JSON.parse(localStorage.getItem('localtodos'))
      setTodos(data)
    }
  }

  const formHandler = (e) => {
    e.preventDefault()
    if (userInput == "") return
    else {
      setTodos([{
        todosName: userInput,
        completed: false,
        dateCreated: new Date().toLocaleString(),
        id: `ff${Math.floor(Math.random() * 988888)} `
      }, ...todos])
      setUserInput("")
    }
  }

  const filterTodosHandler = () => {
    switch (selectStatus) {
      case "completed":
        setFilteredTodos(todos.filter(item => item.completed == true))
        break
      case "uncompleted":
        setFilteredTodos(todos.filter(item => item.completed == false))
        break
      default:
        setFilteredTodos(todos)
        break
    }
  }
  useEffect(() => {
    getTodos()
  }, [])




  //useEffect 
  useEffect(() => {
    saveTodos()
    filterTodosHandler()
  }, [selectStatus, todos])



  return (
    <>
      <div className="App">
        <Navbar />
        <Header filteredTodos={filteredTodos} />
        <center>
          <h4>
            {` Total ${selectStatus} Todos: ${filteredTodos.length}`}
          </h4>
        </center>
        <Form selectHandler={selectHandler} selectStatus={selectStatus} filterTodosHandler={filterTodosHandler} setSelectStatus={setSelectStatus} formHandler={formHandler} userInput={userInput} setUserInput={setUserInput} />
        {todos.length > 0 ? filteredTodos.map(todosItem => (
          <TodosListComponent setTodos={setTodos} todos={todos} key={todosItem.id} todosItem={todosItem} filteredTodos={filteredTodos} />
        )) : <div>
          <center>
            <h2>
              There Is no Todos
            </h2>
          </center>
        </div>}
      </div>
    </>
  );
}

export default App;
