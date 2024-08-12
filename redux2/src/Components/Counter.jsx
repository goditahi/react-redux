import { useSelector, useDispatch } from 'react-redux';
import {increment,decrement,incrementByAmt} from '../feature/cnt/counterSlice'

import React from 'react'

export const Counter = () => {

  const count = useSelector((state)=>state.counter.count)

    const dispatch =useDispatch()
    
   


  return (
    <>
        <h3>count is {count}</h3>
        <button onClick={()=>{dispatch(increment())}}>increament</button>
        <button onClick={()=>{dispatch(decrement())}}>decrement</button>
        <button onClick={()=>{dispatch(incrementByAmt(10))}}>add by payload</button>

</>
  )
}
