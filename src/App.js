import React from 'react';
import './App.css';
import HomePage  from './pages/homepage/homepage.component';
import { Route}  from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignOut from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from '../src/components/header/header.component'
import { auth,createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unSubscribeFromAuth= auth.onAuthStateChanged( async userAuth=>{
     if(userAuth){
      //this will give us user reference
      const userRef= await createUserProfileDocument(userAuth);
      //tranform userRef into snapshot
      userRef.onSnapshot(snapshot=>{
        this.setState(
          {
          currentUser:{
            id:snapshot.id,
            ...snapshot.data()
          }
        },
        ()=>{
          console.log(this.state)
        }
        );
      })

     }else{
       //if there is no user 
       this.setState({currentUser:userAuth})
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
