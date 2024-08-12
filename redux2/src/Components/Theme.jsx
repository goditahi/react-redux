import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeColor } from '../feature/cnt/themeSlice'

const Theme = () => {
    const [color,setcolor]=useState('')
    const dispatch=useDispatch()
  return (
    <div>
        <input type="text" onChange={(e)=>{setcolor(e.target.value)}} />
        <button onClick={()=>{dispatch(changeColor(color))}}>change text color</button>
    </div>
  )
}

export default Theme