import React, { useState, useEffect }  from 'react'
import FormModul from './FormModul'
import TodoForm from './TodoForm'
import Todolist from './TodoList'


function TodosPage (){
  const [todos,setTodos] = useState([])

useEffect(()=>{

  const saved =JSON.parse( localStorage.getItem('todos') || [])
   setTodos(saved)

},[])

useEffect(()=>{
  localStorage.setItem('todos' ,JSON.stringify(todos))
},[todos])

const addHandler =(title_todo)=>{
  const newTodo = {
    title_todo:title_todo,
    id:Date.now(),
    completed:false
  }
 setTodos(prev=>[newTodo, ...prev])
}


const toggleHandler=(id)=>{
  setTodos(prev => 
    prev.map(todo=>{
    if(todo.id == id){ 
      todo.completed =  true
     
    }
    return todo
  }))
}

const removeHandler=(id)=>{
  if(window.confirm('Вы уверены, что хотите удалить?')){
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }
}
  return(
    <div className="careful_wrapper">
  
    <FormModul />
    <div>
      Дорогая Невеста, мы хотим предоставить тебе сервис, который поможет подготовится к важным событиям в жизни. В погоне за лучшим, важно ничего не забыть.Здесь ты можешь размещать все свои  дела и следить за их выполнением.

    </div>
    <TodoForm onAdd={addHandler}/>
    <Todolist todos={todos} 
    onRemove={removeHandler} onToggle ={toggleHandler}/>
    </div>
  )

}

export default TodosPage