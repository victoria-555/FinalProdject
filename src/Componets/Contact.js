import React from 'react'

function Contact (){
  return(
    <div className ='contact_wrapper'>
    <div className ='contact_information'>
      <h1>Мы в самом сердце Минска</h1>
      <p>❤️ ул. Карла Либкнехта, 68</p>
      <h2>ВРЕМЯ РАБОТЫ</h2>
      <p> Понедельник — Cуббота<br/>
          11:00 — 20:00<br/>
          Воскресенье <br/>
          11:00 — 18:00</p>
      <h2>ВСЕГДА НА СВЯЗИ</h2>
      <p>+375 (17) 88-88-800</p>
      <p>vintage@gmail.com</p>
    </div>
    <div className ='contact_map'>
    <iframe   className = 'map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.950337230271!2d27.52603821530628!3d53.89708664101714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcffb72885f8b%3A0xfa83338b77e16e32!2z0YPQuy4g0JrQsNGA0LvQsCDQm9C40LHQutC90LXRhdGC0LAgNjgsINCc0LjQvdGB0Lo!5e0!3m2!1sru!2sby!4v1617722680260!5m2!1sru!2sby" > </iframe>
    </div>
  </div>
  )
  

}
 export default Contact