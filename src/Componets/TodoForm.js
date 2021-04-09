import React,{useState} from 'react'

 function TodoForm(props){
  const[title_todo, setTitle_todo]  = useState('')

  const changeHandler = (e)=>{
    setTitle_todo(e.target.value)

  }
   const keyPressHandler = (e)=>{
     if(e.key === 'Enter'){
       props.onAdd (title_todo)
       setTitle_todo('')

     }

   }

  return(
     <div className="input_field">
       <input onChange={changeHandler}
        value={title_todo} 
        type="text" 
        id='title_todo' 
        placeholder='Введите название дела'
        onKeyPress={keyPressHandler}/>
       <label htmlFor='title_todo' className='active_todo'></label>
     </div>

   )

 }

 export default TodoForm