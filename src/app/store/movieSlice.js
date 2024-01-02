'use client'
import { createSlice } from "@reduxjs/toolkit";

const createslice = createSlice({
    name:"movieName",
    initialState:[],
    reducers:{
        add(state,action){
            state.push(action.payload)


        },
        remove(state,action){
            return state.filter((item)=> item.id !== action.payload)
        }
    }
})

 export const {add,remove} = createslice.actions
 export default createslice.reducer