import React, { useState } from "react";
import './App.css';
import Header from './components/Header';
import CartItems from './components/CartItems';
import CartTotal from './components/CartTotal';
import CartItem from './components/CartItem';
import data from './Data';


function App() {

  const [ cartItems, setCartItems ] = useState(data);
  const listItems = cartItems.map((cartItem) =>
  <li>{CartItem}</li>
);

  return (
    <div className="App">
      <Header title="Amazon Cart" />
      <div className="App-main">
        <CartItems  items ={cartItems} setCartItems={setCartItems}/>
        <CartTotal  items ={cartItems}/>
      </div>
    </div>
  );
}

export default App;
