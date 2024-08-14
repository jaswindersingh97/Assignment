import React, { useEffect, useState } from 'react';
import style from './CartPageGrid.module.css';

function CartPageGrid() {
  const [cartProducts, setCartProducts] = useState([]);

  const loadProducts = () => {
    const storedProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
    setCartProducts(storedProducts); // Update the state with the loaded products
  };

  useEffect(() => {
    loadProducts(); // Load products when the component mounts
  }, []);

  return (
    <div className={style.container}>
      {cartProducts.length > 0 ? (
        cartProducts.map((product, index) => (
          <div key={index} className={style.productCard}>
            <img src={product.product_photos[0]} alt="Product" />
            <div className={style.productDetails}>
              <p>{product.product_title}</p>
              <h2>{product.offer.price}</h2>
              <div className={style.buttons}>
              <button className={style.buynow} >Buy now</button>
              <button className={style.remove} >Remove X</button>
            </div>
            </div>
            
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
}

export default CartPageGrid;
