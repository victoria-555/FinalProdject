import React, { useContext } from 'react'
import UnionContext from './UnionContext'


function FilterModule({setFilter}){
    const {radio, setRadio} =useContext (UnionContext)

    return(
        <div className="filter_module" onClick={()=>{setFilter(false)}}>
            <div className="filter_body" onClick={(event)=>{event.stopPropagation()}}>
                <h3>Сортировка по</h3>
                <label><input type="radio" defaultChecked={radio == 'default' ?true:false} name="filter" value="default" onClick={()=>{setRadio('default')}}/>По умолчанию</label>
                <label><input type="radio" defaultChecked={radio == 'abs' ?true:false}  name="filter" value="abs" onClick={()=>{setRadio('abs')}}/>По возрастанию</label>
                <label><input type="radio" defaultChecked={radio == 'desc' ?true:false}  name="filter" value="desc" onClick={()=>{setRadio('desc')}}/>По убыванию</label>
            </div>
        </div>
    )
}

export default FilterModule