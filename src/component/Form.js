import {useState,useEffect} from 'react'

const Form = () => {
  const formHandler = (e) => {
    e.preventDefault()

  }
  
  return (
    <form className="p-2" onClick={formHandler}>
      <div>
      <input className="input-form" placeholder="please input todos"  />
        <button className='btn-form-submit bg-warning'>+</button>
      </div>
    </form>
  )
}
export default Form
