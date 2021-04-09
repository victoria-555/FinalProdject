import React from 'react'


 function Todolist ({todos, onRemove, onToggle}){
  if(todos.length === 0){
    return(
      <p className ='center'> Список пока пуст </p>
    )
  }

  const remove = (e, id)=>{
    e.preventDefault()
    onRemove(id)

  }


  return(
     
     <ul className="todo_item_wrapper">
       {todos.map(todo =>{
         
         const classes = ['todo_item']
         if (todo.completed){
           classes.push('completed')
         }

         return(
          <li className={classes.join(' ')}   key={todo.id}>
          <label>
            <input type='checkbox' checked={todo.completed}  onChange={onToggle.bind(null,todo.id)}/> 
            <span>{todo.title_todo}</span>
            <i className='text' onClick={(e)=> remove(e,todo.id)}>X</i>
          </label>
        </li>
         )
       })}
      
     </ul>
   )

 }

 export default Todolist