import React, { useState } from 'react'
import Header from './Componets/Header'
import Main from './Componets/Main'
import './style/style.css'
import UnionContext from './Componets/UnionContext'


function App() {
  
  const [basketProduct, setBasketProduct] = useState(JSON.parse(localStorage.getItem('basket'))|| [])
  const [search, setSearch] = useState('')
  const [radio, setRadio] = useState('default')

  return (
    <div className="App">
    
      <UnionContext.Provider value={{basketProduct, setBasketProduct, search, setSearch, radio, setRadio}}>
     
        <Header />
        <Main />
      </UnionContext.Provider>

    </div>
  );
}

export default App;
