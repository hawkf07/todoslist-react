import {useState,useEffect} from 'react'

const Form = ({userInput,setUserInput,formHandler}) => {
  const userInputHandler = (e) => {
    setUserInput(e.target.value)
  }
  
  return (
    <form className="formInput d-flex py-3 align-items-center justify-content-center" onSubmit={formHandler}>
      <div>
      <input value={userInput} onChange={userInputHandler} className="input-form" placeholder="please input todos"  />
        <button className='btn-form-submit bg-warning'>+</button>
      </div>
    </form>
  )
}
export default Form
