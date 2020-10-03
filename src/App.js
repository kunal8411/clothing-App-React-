import React from 'react';
import './App.css';
import HomePage  from './pages/homepage/homepage.component';
import { Route}  from 'react-router-dom';
import ShopPage from './pages/shop/shop.component'
// const HatsPage=()=>(
//   <div>
//     <h1>Hats Page</h1>
//   </div>
// );

function App() {
  return (
    <div >
      <switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
      </switch>
    </div>
  );
}

export default App;
