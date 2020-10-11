import React from 'react'
import {connect} from 'react-redux';
import {togglCartHidden} from '../../redux/cart/cart.actions'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
const CartIcon =({togglCartHidden, itemCount})=>(
    <div className='cart-icon' onClick={togglCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

//when to trigger the event, for that we are using this method
//on click of this cart symbol in header we want to trigger the event so we are using this method here
const mapDispatchToProps = dispatch=>({
    togglCartHidden : () => dispatch(togglCartHidden())
})

const mapStateToProps = (state) =>({
    itemCount:selectCartItemsCount(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
