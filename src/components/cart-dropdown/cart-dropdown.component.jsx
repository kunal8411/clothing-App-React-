import React from 'react';
import CustomButton from '../custom-button/custom-button.component'
import {connect} from 'react-redux'
import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component'
import {withRouter} from 'react-router-dom'
import {createStructuredSelector} from 'reselect'
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {togglCartHidden} from '../../redux/cart/cart.actions'


//dispatch-->if we not pass second argument in connect then also we will get access to dispatch,
//so without writing mapStateToDispatch method we can pass use dispatch
const CartDropdown =({cartItems, history, dispatch})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                //in js value of zero is false 
                cartItems.length ?
                cartItems.map(cartItem=>(
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
                :
                <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={()=>{
            history.push('/checkout');
            dispatch(togglCartHidden());
            }}>
            CHECKOUT
        </CustomButton>
    </div>
)

const mapStateToProps =createStructuredSelector({
    cartItems:selectCartItems
})


export default withRouter(connect(mapStateToProps)(CartDropdown));