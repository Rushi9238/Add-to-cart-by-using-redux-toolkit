import {configureStore} from '@reduxjs/toolkit'
import ReducerSlice from './ReducerSlice'


const myStore=configureStore({
    reducer:{
        ReducerSlice
    }
})
export default myStore
