import { createSlice } from "@reduxjs/toolkit";

const initialStateValue={
    count:0
}

export const counterSlice =createSlice({
    name:"counter",
    initialState:initialStateValue,
    reducers:{
        increment: (state)=>{
            state.count+=1
        },
        decrement: (state)=>{
            state.count-=1
        },
        incrementByAmt:(state,actions)=>{
            state.count+=actions.payload
        }
    }

})

export const {increment,decrement,incrementByAmt} = counterSlice.actions
export default counterSlice.reducer