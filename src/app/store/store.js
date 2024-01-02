'use client'
import { configureStore } from "@reduxjs/toolkit";
import movieSlices from "./movieSlice";

const Store = configureStore({
    reducer:{
        movie : movieSlices,
    }
})

export default Store;