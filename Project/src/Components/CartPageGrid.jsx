import React, { useState,useEffect } from 'react';
import style from './CartPageGrid.module.css';
import RemoveSure from './RemoveSure';

function CartPageGrid() {
  const [cartProducts, setCartProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productToRemove, setProductToRemove] = useState(null);

  const loadProducts = () => {
    const storedProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
    setCartProducts(storedProducts);
  };

  useEffect(() => {
    loadProducts(); 
  }, []);

  const handleRemoveClick = (index) => {
    setProductToRemove(index); // Set the product to be removed
    setIsModalOpen(true); // Open the modal
  };

  const confirmRemoval = () => {
    const updatedProducts = cartProducts.filter((_, index) => index !== productToRemove);
    setCartProducts(updatedProducts);
    localStorage.setItem("cartProducts", JSON.stringify(updatedProducts));
    setIsModalOpen(false); // Close the modal
  };

  const cancelRemoval = () => {
    setIsModalOpen(false); // Close the modal without removing
  };

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
                <button className={style.buynow}>Buy now</button>
                <button className={style.remove} onClick={() => handleRemoveClick(index)}>Remove X</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}

      {isModalOpen && (
        <RemoveSure
          onConfirm={confirmRemoval}
          onCancel={cancelRemoval}
        />
      )}
    </div>
  );
}

export default CartPageGrid;
