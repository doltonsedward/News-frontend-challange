import { createSlice } from '@reduxjs/toolkit'

export const newsReducer = createSlice({
    name: "counter",
    initialState: {
        title: ''
    },
    reducers: {
        addCount: (state, action) => {
            state.title = action.payload.title
        }
    }
})

export const { addCount } = newsReducer.actions
export default newsReducer.reducer