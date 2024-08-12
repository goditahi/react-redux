import React from 'react'
import { useSelector } from 'react-redux'

const Coin = () => {
     const count = useSelector((state)=>state.counter.count)
     const txtColor =useSelector((state)=>state.theme.color)
    console.log(count)
  return (
    <div style={{color:txtColor}}>Coin is {count}</div>
  )
}

export default Coin