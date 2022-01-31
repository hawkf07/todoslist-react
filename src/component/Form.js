import {useState,useEffect} from 'react'

const Form = ({userInput,setUserInput,formHandler,selectStatus,setSelectStatus}) => {
  const userInputHandler = (e) => {
    setUserInput(e.target.value)
  }
  const selectHandler = (e) => {
    setSelectStatus(e.target.value)
  }
  
  return (
    <form className="formInput d-flex py-3 align-items-center justify-content-center" onSubmit={formHandler}>
      <div>
      <input value={userInput} onChange={userInputHandler} className="input-form" placeholder="please input todos"  />
        <button className='btn-form-submit bg-warning'>+</button>
      </div>
      <select onChange={selectHandler} >
        <option value="all" >all</option>
        <option value="completed" >completed</option>
        <option value="uncompleted" >uncompleted</option>
      </select>
    </form>
  )
}
export default Form
