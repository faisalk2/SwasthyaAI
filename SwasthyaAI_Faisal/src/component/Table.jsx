
import React from 'react'
import { useState } from 'react'

import List from './List';
import DateTimePicker from 'react-datetime-picker';

const Table = () => {
    const [data, setData]=useState([]);
    const [input,setInput]=useState({
        company:"",
        constact:"",
        country:"",
        data:Date.now()
        
    })

    const handleChange=(e)=>{
        if(e.target===undefined)
        {
            setInput({...input,date:e});
        }else{
            let {name,value}=e.target
            setInput({...input,[name]:value});
        }
       
    }
    const handleClick=()=>{
        console.log(input)
        setData([...data,input]);
    }

    const handleSort=(ele=>{
        
    })


    
  return (
    <div>
        <select name="" id="" onChange={handleSort} >
            <option value="">select</option>
            <option value="asc">asc</option>
            <option value="desc">desc</option>
        </select>
        <input type="text" name="company" id=""  value={input.company} onChange={handleChange} />
        <input type="text" name="constact" id="" value={input.constact} onChange={handleChange}  />
        <input type="text" name="country" id="" value={input.county} onChange={handleChange} />
        <DateTimePicker onChange={handleChange} value={input.date} />
        <button onClick={handleClick} >add</button>
        <List data={data} />
    </div>
  )
}

export default Table