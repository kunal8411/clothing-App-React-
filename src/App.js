import React from 'react';
import './App.css';
import HomePage  from './pages/homepage/homepage.component';
import { Route}  from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignOut from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from '../src/components/header/header.component'
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser: null
    }
  }
  unSubscribeFromAuth=null;

  componentDidMount(){
    this.unSubscribeFromAuth= auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user})
      console.log(user)

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
      <Header currentUser={this.state.currentUser } / >
      <switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInAndSignOut}/>
      </switch>
    </div>
  );
}
}

export default App;
