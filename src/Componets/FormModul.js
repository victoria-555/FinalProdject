import React from 'react'

function FormModul (){
  return(
    <div className='form_wrapper'>
      <form className='form'>
        <p className='title'>Запись на примерку</p>
       
        <input type="text" name="name" id="name" placeholder="Ваше имя" className="b_input" autocomplete="off" />
        <input type="tel" name="phone" id="phone" placeholder="Контактный телефон" className="f_input" autocomplete="off" />
        <input type="submit" value="Записаться" className="btn_sabmit_form" />
      </form>
      <div className='form_image'></div>
    </div>
  )
}

export default FormModul