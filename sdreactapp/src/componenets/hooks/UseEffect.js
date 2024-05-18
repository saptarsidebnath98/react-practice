import React, { useEffect, useState } from 'react'
import './style.css'

const UseEffect = () => {
    // const initialData = 0;
    const [myNum, setMyNum]= useState(0);

   useEffect(()=>{
       document.title = `Chats(${myNum})`
   })
  return (
    <>
    <div className="center-div">
        <p>{myNum}</p>
        <div className="button2 one" onClick={()=> setMyNum(myNum + 1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
           INCR
        </div>
    </div>
    </>
  )
}

export default UseEffect;