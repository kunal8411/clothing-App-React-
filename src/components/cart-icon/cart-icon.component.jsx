import React from 'react'
import {connect} from 'react-redux';
import {togglCartHidden} from '../../redux/cart/cart.actions'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'
const CartIcon =({togglCartHidden, itemCount})=>(
    <div className='cart-icon' onClick={togglCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)


const mapDispatchToProps = dispatch=>({
    togglCartHidden : () => dispatch(togglCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount:selectCartItemsCount
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
