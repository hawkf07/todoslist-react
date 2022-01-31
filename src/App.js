import logo from './logo.svg';
import {useState,useEffect} from 'react'
import Navbar from './component/Navbar.jsx'
import Header from './component/Header.js'
import TodosListComponent from './component/TodosListComponent'
import Form  from './component/Form.js'
import './App.css';

function App() {

  const [userInput,setUserInput] = useState("")
  const [todos,setTodos] = useState([]) 
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

  


  return (
    <div className="App">
      <Navbar />
      <Header/>
      <Form formHandler={formHandler} userInput={userInput} setUserInput={setUserInput}/>

      {todos.map(todosItem=> (
        <TodosListComponent setTodos={setTodos} todos={todos} key={todosItem.id} todosItem={todosItem}/>
      ))}
    </div>
  );
}

export default App;
