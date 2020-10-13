
// import { forwardRef } from 'react'
import cartActionTypes from './cart.types'

import {addItemsToCart, removeItemFromCart} from './cart.utils'

//we want to hide our cart dropdown when we first comes to our website thast why hidden by default true
const INITIAL_STATE={
    hidden:true,
    cartItems:[]
}


const cartReducer=(state=INITIAL_STATE, action)=>{
    switch(action.type){
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden:!state.hidden
            }
        case cartActionTypes.ADD_ITEM:
            return{
                ...state,
                //here we are adding all previous values in array so we have used
                //...state.cartItems to spread all the values in previous array
                cartItems:addItemsToCart(state.cartItems, action.payload)
            } 
        case cartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems:state.cartItems.filter(cartItem=>cartItem.id !== action.payload.id)
            } 
        case cartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems:removeItemFromCart(state.cartItems, action.payload)
            }          
        default:
            return state;

    }
}
export default cartReducer;