import cartActionTypes from './cart.types'



export const togglCartHidden= () => ({
    type:cartActionTypes.TOGGLE_CART_HIDDEN
})


export const addItem=(item)=>({
    type:cartActionTypes.ADD_ITEM,
    payload:item
})