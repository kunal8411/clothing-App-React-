import React from 'react'
import {connect} from 'react-redux';
import {togglCartHidden} from '../../redux/cart/cart.actions'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'

const CartIcon =({togglCartHidden})=>(
    <div className='cart-icon' onClick={togglCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)

//when to trigger the event, for that we are using this method
//on click of this cart symbol in header we want to trigger the event so we are using this method here
const mapDispatchToProps = dispatch=>({
    togglCartHidden : () => dispatch(togglCartHidden())
})

export default connect(null,mapDispatchToProps)(CartIcon);
