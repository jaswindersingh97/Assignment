import React from 'react';
import style from './CartSummary.module.css';
import { useContext } from 'react';
import {AppContext} from './../context/AppContext';
function CartSummary() {
    const {cartProducts}=useContext(AppContext);
  return (
    <div className={style.container}>
    {
        //need to implement a reducer function which would calculate the total fare, moreover need to make sure that only single item is being selelcted and create a summmary page full 
        cartProducts.map((item,index)=>{
            <li key={index}>{item}</li>
            console.log(item.offer.price)
        })
    }
    </div>
  )
}

export default CartSummary
