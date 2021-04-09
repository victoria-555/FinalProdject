import React from 'react'
import Catalog from './Catalog'
import {Route} from 'react-router-dom'
import Basket from './Basket'
import ProductCart from './ProductCart'
import TodosPage from './TodosPage'
import About from './About'
import Contact from './Contact'
import MainPage from './MainPage'

function Main(){
    return(
    <main className="main">  
      <Route path="/" exact component={MainPage} /> 
      <Route path="/about" exact component={About} /> 
      <Route path="/catalog"  component={Catalog} />
      <Route path="/basket" component={Basket}/>
      <Route path="/product/:id" component={ProductCart} />
      <Route path ='/todos' component = {TodosPage}/>
      <Route path ='/contact' component = {Contact}/>
          
    </main>)
}

export default Main