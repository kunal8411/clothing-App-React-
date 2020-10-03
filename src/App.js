import React from 'react';
import './App.css';
import HomePage  from './pages/homepage/homepage.component';
import { Route}  from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignOut from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from '../src/components/header/header.component'

function App() {
  return (
    <div >
      <Header/ >
      <switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInAndSignOut}/>
      </switch>
    </div>
  );
}

export default App;
