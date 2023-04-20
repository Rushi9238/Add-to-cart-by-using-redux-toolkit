import { createSlice } from '@reduxjs/toolkit'

const cart = createSlice({
    name: 'cartData',
    initialState: {
        product: [],
        cart: []
    },
    reducers: {
        collectData: (state, action) => {
            // console.log(action);
            state.product = action.payload
        },
        addToCart: (state, action) => {
            state.cart.push(action.payload)
            // console.log(action.payload);
        },
        removeToCart: (state, action) => {
            // console.log(cart);
            state.cart=action.payload
            console.log(action.payload);
        }
    }
})
export const { collectData, addToCart, removeToCart } = cart.actions

export default cart.reducer