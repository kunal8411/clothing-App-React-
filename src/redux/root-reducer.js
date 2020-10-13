//actual base reducer object contains whole state

import  {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import userReducer from './user/user.reducer';
import  cartReducer from './cart/cart.reducer';
import direcoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key:'root', 
    storage, 
    whiteist:['cart']
}

const rootReducer =combineReducers({
    user:userReducer,
    cart:cartReducer,
    //this directory contains all the information which we are rendering on home page
    directory:direcoryReducer  ,
    shop:shopReducer

})


export default persistReducer(persistConfig, rootReducer)
