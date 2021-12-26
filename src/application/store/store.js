import { configureStore } from '@reduxjs/toolkit'
import { newsReducer } from '../models/newsReducer'

export default configureStore({
    reducer: {
        news: newsReducer
    }
})