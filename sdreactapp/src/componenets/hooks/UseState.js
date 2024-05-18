import React, { useState } from 'react'
import './style.css'

const UseState = () => {
    const initialData = 0;
    const [myNum, setMyNum]= useState(initialData);
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
        <div className="button2 two" onClick={()=> myNum<= 0 ? setMyNum(0) : setMyNum(myNum - 1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            DECR
        </div>
    </div>
    </>
  )
}

export default UseState;
