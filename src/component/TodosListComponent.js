
export default function TodosListComponent ({todosItem,todos,setTodos}) {

  const deleteHandler = (e) => {
   console.log(todosItem.id)
   setTodos(todos.filter(item=> item.id!==todosItem.id))
  }
  const completeHandler = (e) => {
    setTodos(prevTodos => {
      const newId = prevTodos.map(item => {
        if (item.completed === false){
        return {
            ...item,
            completed:!item.completed
        }}
      })
      return newId
    })
  }


  return(
    <ul className={`container container-todoslist bg-dark p-3 ${todosItem.completed ? 'todos-completed' : ''} `}>
      <li> name : {todosItem.todosName}</li>
      <li> id:{todosItem.id} </li>
      <li> date created : {todosItem.dateCreated} </li>
      <li> {`${todosItem.completed ? 'completed' : 'uncompleted' }`}  </li>
      <center>
      <button type="button" className="setcomplete btn-primary" onClick={completeHandler} >completed </button>  
      <button type="button" className="delete btn-warning" onClick={deleteHandler} > DELETE</button>  
      </center>
    </ul>
  )
}
