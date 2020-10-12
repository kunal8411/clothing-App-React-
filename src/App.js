import React from 'react';
import './App.css';
import HomePage  from './pages/homepage/homepage.component';
import { Switch, Route, Redirect}  from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignOut from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from '../src/components/header/header.component'
import { auth,createUserProfileDocument } from './firebase/firebase.utils';
import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from './redux/user/user.selector'
class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount(){
    // console.log(this.props)
    const {setCurrentUser} = this.props;

    //onAuthStateChanged-->whenever state changes this function will render 
    //and store the data into database from firebase auth
    this.unSubscribeFromAuth= auth.onAuthStateChanged( async userAuth=>{

      //if user value is not null
     if(userAuth){
      //this will give us user reference
      const userRef= await createUserProfileDocument(userAuth);
      //tranform userRef into snapshot
      userRef.onSnapshot(snapshot=>{
        setCurrentUser(
          {
            id:snapshot.id,
            ...snapshot.data()
          }
        );
        // console.log(this.state)
      })

     }else{
       //if there is no user, we pass the current user which we are getting from somewhere 
       setCurrentUser(userAuth);
     }
      
      

    })
  }
  //this will close our subscription
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render()
  {
    return (
    <div >
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' render={()=>this.props.currentUser ?(<Redirect to='/'/>): (<SignInAndSignOut/>)}/>
      </Switch>
    </div>
  );
}
}

//we want current user so we take out currentUser from state as a props
const mapStateToProps =createStructuredSelector({
  currentUser:selectCurrentUser
})


const mapDispatchToProps=(dispatch)=>({
  
  setCurrentUser:(user)=>dispatch(setCurrentUser(user))
})



//null because we dont want to pass mapStateToProps() method as we are just passing props from state here 
export default connect(mapStateToProps,mapDispatchToProps)(App);
