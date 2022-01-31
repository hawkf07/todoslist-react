import logo from './logo.svg';
import {useState,useEffect} from 'react'
import Navbar from './component/Navbar.jsx'
import Header from './component/Header.js'
import TodosListComponent from './component/TodosListComponent'
import Form  from './component/Form.js'
import './App.css';

function App() {
  // React State
  const [userInput,setUserInput] = useState("")
  const [selectStatus,setSelectStatus] = useState("all")
  const [todos,setTodos] = useState([]) 
  const [filteredTodos,setFilteredTodos] = useState([])
  // function
  
  const formHandler = (e) => {
    e.preventDefault()
    if (userInput == "") return 
    else {
    setTodos([{
      todosName:userInput,
      completed:false,
      dateCreated:new Date().toLocaleString(),
      id: `ff${Math.floor(Math.random() * 988888)} `
    },...todos])
    setUserInput("")
    }
  }

  const filterTodosHandler = () => {
    switch (selectStatus){
      case "completed":
        setFilteredTodos(todos.filter(item=> item.completed == true))
        break
      case "uncompleted":
        setFilteredTodos(todos.filter(item => item.completed == false))
        break
      default:
        setFilteredTodos(todos)
        break
    }
  }


  //useEffect 
  useEffect(() => {
    filterTodosHandler()
  },[selectStatus,todos])


  return (
    <div className="App">
      <Navbar />
      <Header/>
      <Form selectStatus={selectStatus} filterTodosHandler={filterTodosHandler} setSelectStatus={setSelectStatus} formHandler={formHandler} userInput={userInput} setUserInput={setUserInput}/>
      {filteredTodos.map(todosItem=> (
        <TodosListComponent setTodos={setTodos} todos={todos} key={todosItem.id} todosItem={todosItem} filteredTodos={filteredTodos} />
      ))}
    </div>
  );
}

export default App;
