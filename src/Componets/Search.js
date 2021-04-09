import React, { useContext } from 'react'
import UnionContext from './UnionContext'

function Search(){
    const {setSearch} = useContext(UnionContext)    

    function searchProduct(event){
      
        setSearch(event.target.value)
    }
    
    return(
        <div className="header_search">
            <input className="header_search_input" name="serch_value" placeholder="Поиск" onChange={(event)=>{searchProduct(event)}}/>
        </div>
    )
}
export default Search