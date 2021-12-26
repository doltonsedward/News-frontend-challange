import { createSlice } from '@reduxjs/toolkit'

export const newsReducer = createSlice({
    name: "news",
    initialState: {
        title: ''
    }
})