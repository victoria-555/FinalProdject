import React, { Fragment } from 'react'
import {NavLink, useLocation} from 'react-router-dom'


function Header(){
  const basketProduct = JSON.parse(localStorage.getItem('basket')) || 0
  const location = useLocation()

  function getCount(){
      if(basketProduct == 0) return basketProduct;
      let count = 0;

      basketProduct.forEach((product) => {
        count += product.count
      });

      return count
  }



    return(
        <header className="header">
            <nav className="nav-wrapper">
      
              <ul>
                <li><NavLink to="/"><img src='../img/logo.png'  alt="Винтаж логотип" title="Винтаж логотип" /></NavLink></li>
                <li><NavLink to="/about">О нас</NavLink></li>
                <li className = "header_todo"><NavLink to ="/todos">Полезное</NavLink></li>
                <li><NavLink to="/catalog">Каталог</NavLink></li>
                <li className="header_widget">
                  {location.pathname == '/basket' ?
                  <span>В корзине:{ getCount()==[] ? 0 : getCount()}</span>:
                    <Fragment>
                    <div className="header_basket">
                      <NavLink to="/basket">Корзина <span className="header_basket_count">{getCount()}</span></NavLink>
                    </div>
                  </Fragment> }
                </li>
                <li><NavLink to="/contact">Контакты</NavLink></li>
              </ul>
            </nav>
        
      </header>
    )
}

export default Header