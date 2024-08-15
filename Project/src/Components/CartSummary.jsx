import React, { useContext, useState } from 'react';
import style from './CartSummary.module.css';
import { AppContext } from './../context/AppContext';
import downicon from './../assets/downarrow.png'
import righticon from './../assets/rightArrow.png';
import SummaryTable from './SummaryTable';
function CartSummary() {
  const { cartProducts,totalPrice } = useContext(AppContext);
  const [viewTable,setViewTable]=useState(false);
  const buttonClk = ()=>{
    setViewTable(!viewTable);
  }
  // const [Discount,setDiscount]=useState(0);
  // const discount_coupon =[{name:"free10percent",per:10,amt:0},{name:"100dollaroff",per:0,amt:100}]
  const fixed_discount=totalPrice>100?100:0;
  const percent_discount=10;
  const toBePaid=(totalPrice*(100-percent_discount)/100)-fixed_discount;
  return (
    <div className={style.container}>
      <h1>PRICE DETAILS</h1>
      <div className={style.rows}>
      <div style={{cursor:'pointer'}} onClick={buttonClk}>
        <span>Price ({cartProducts.length} items):</span>
        <span>${totalPrice.toFixed(2)}</span>
       {viewTable?<img src={downicon}/>: <img src={righticon} alt='down_arrow'/>}
      </div>
      {viewTable && <SummaryTable/>}
      <div>
        <span>Discount: {percent_discount}%</span>
        <span className={style.discount}>-${(totalPrice*percent_discount/100).toFixed(2)}</span>
      </div>
      <div>
        <span>Discount: ${fixed_discount} off</span>
        <span className={style.discount}>-${(fixed_discount).toFixed(2)}</span>
      </div>
      <div>
        <span>Total Price</span>
        <span>${toBePaid.toFixed(2)}</span>
      </div>
      </div>
      <div className={style.button}>
        <button>Buy Now</button>
      </div>
    </div>
  );
}

export default CartSummary;
