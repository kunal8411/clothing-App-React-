//actual base reducer object contains whole state

import  {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import userReducer from './user/user.reducer';
import  cartReducer from './cart/cart.reducer';

import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key:'root', 
    storage, 
    whiteist:['cart']
}

const rootReducer =combineReducers({
    user:userReducer,
    cart:cartReducer  
})


export default persistReducer(persistConfig, rootReducer)
