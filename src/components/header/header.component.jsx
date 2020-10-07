import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {auth} from '../../firebase/firebase.utils'
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component'
import {ReactComponent as Logo} from '../../assets/crown.svg';

const Header= ({currentUser})=>(
    <div className="header">
        <Link className='logo-container' to="">
            <Logo className='logo' />
        </Link>
    <div className='options'>
        <Link className='option' to='/shop'>SHOP</Link>
        <Link className='option' to='/contact'>CONTACT</Link>
        {
            currentUser ? (
                <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
            ) :(
                <Link className='option' to='/signin'>
                    SIGN IN        
                </Link>
            )
        }
        <CartIcon/>
    </div>
    </div>
)


//state is high order state-->root Reducer 
//taking value from state and passing as a prop to header componenent
const mapStateToProps = state => ({
    //state is root reducer inside root-reducer we will find user key and associated cueeUser from that key
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);