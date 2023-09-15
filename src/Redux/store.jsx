import {configureStore} from '@reduxjs/toolkit'
import SubmittedformReducer from "./content"

const store = configureStore({
    reducer:{
        blogcontent:SubmittedformReducer
    },
})

export default store