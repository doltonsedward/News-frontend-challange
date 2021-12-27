import { createSlice } from '@reduxjs/toolkit'

interface NewsState {
    title: string,
    description: string,
    image: string,
    sourceName: string,
    url: string
}

interface AddNewsAction {
    payload: {
        title: string,
        description: string,
        image: string,
        sourceName: string,
        url: string
    }
}

export const newsReducer = createSlice({
    name: "news",
    initialState: {
        title: '',
        description: '',
        image: '',
        sourceName: '',
        url: '',
    },
    reducers: {
        addNews: (state: NewsState, action: AddNewsAction) => {
            state.title = action.payload.title
            state.description = action.payload.description
            state.image = action.payload.image
            state.sourceName = action.payload.sourceName
            state.url = action.payload.url
        }
    }
})

export const { addNews } = newsReducer.actions
export default newsReducer.reducer