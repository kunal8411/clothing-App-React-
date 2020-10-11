  
  
  export const addItemsToCart=(cartItems, cartItemToAdd)=>{
    const existingCartItem =cartItems.find(cartItem=> cartItem.id===cartItemToAdd.id)

    if(existingCartItem){
        //here we are usign map function ,
        // if element present then we are adding only quantity
        //else we add cartItem into out array 
        
        return cartItems.map(cartItem=> cartItem.id===cartItemToAdd.id
            ?{...cartItem, quantity:cartItem.quantity+1 }
            : cartItem    
            )
    }

    return [...cartItems, { ...cartItemToAdd , quantity:1 }]
  } 