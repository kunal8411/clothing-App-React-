import React from 'react';
// import checkoutComponent from '../../pages/checkout/checkout.component';
import {connect} from 'react-redux';
import {clearItemFromCart} from '../../redux/cart/cart.actions'
import './checkout.styles.scss';
    
const CheckoutItem = ({cartItem ,clearItem})=>{
    const {imageUrl, name, price, quantity} = cartItem;
    return(
        <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt="item"/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span> 
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={()=> clearItem(cartItem)}>&#10005;</div> 
    </div>
    )
    
};

const mapDispatchToProp= (dispatch)=> ({
    clearItem : item =>dispatch(clearItemFromCart(item)) 
})

export default connect(null, mapDispatchToProp)(CheckoutItem);

