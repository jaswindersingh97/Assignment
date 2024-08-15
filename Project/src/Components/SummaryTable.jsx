import React, { useContext } from 'react'
import { AppContext } from './../context/AppContext';
import style from "./SummaryTable.module.css";
function SummaryTable() {
  const {cartProducts,totalPrice}=useContext(AppContext);
  return (
    <>
      <table className={style.table}>
        <thead>
          <tr>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((item, index) => {
            const price = parseFloat(item.offer.price.replace('$', ''));
            return (
              <tr key={index} className={style.list}>
                <td>{item.product_title}</td>
                <td>X{item.count}</td>
                <td>${(price * item.count).toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">Total</td>
            <td>${totalPrice.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>

    </>
  )
}

export default SummaryTable
