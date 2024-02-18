import React, { useRef, useState } from 'react';
import './Context.css';

const Context = () => {
  const[Color,setColor]=useState("white");
  const[Toggle,setToggle]=useState("white");
  const inRef=useRef();
  function handleToggle(e)
  {
    e.preventDefault()
  
    Toggle==="white"?setToggle("black"):setToggle("white");

  }
  return (
    <form onSubmit={(e)=>handleToggle(e)}>
    <div className='full'>
      
        <div className='box' style={{backgroundColor:Color}}><p style={{color:Toggle}}>{Color}</p></div><br/><br/>
        <input type="text"  onChange={(e)=>setColor(e.target.value)} ref={inRef}/>
        <button type="submit" onClick={()=>inRef.current.focus()} style={{color:'blueviolet',backgroundColor:'bisque',marginTop:'5px'}}>Toggle</button>
      
        </div>
        </form>
  )
}

export default Context