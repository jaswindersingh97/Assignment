import React, { useState } from 'react';
import style from './CartPageGrid.module.css';
import RemoveSure from './RemoveSure';
import ProductPage from '../pages/ProductPage';

function CartPageGrid({ cartProducts, setCartProducts }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productToRemove, setProductToRemove] = useState(null);
  const [productScreen, setProductScreen] = useState(false);
  const [item, setItem] = useState({});

  const productPageView = (product) => {
    setItem(product);
    setProductScreen(!productScreen);
  };

  const countbutton = (index, operation) => {
    const updatedProducts = cartProducts.map((product, i) => {
      if (i === index) {
        const updatedCount = operation ? product.count + 1 : product.count - 1;
        return { ...product, count: updatedCount > 1 ? updatedCount : 1 }; // Ensure count doesn't go below 1
      }
      return product;
    });
    setCartProducts(updatedProducts);
  };

  const handleRemoveClick = (index) => {
    setProductToRemove(index); // Set the product to be removed
    setIsModalOpen(true); // Open the modal
  };

  const confirmRemoval = () => {
    const updatedProducts = cartProducts.filter((_, index) => index !== productToRemove);
    setCartProducts(updatedProducts);
    setIsModalOpen(false); // Close the modal
  };

  const cancelRemoval = () => {
    setIsModalOpen(false); // Close the modal without removing
  };

  return (
    <div className={style.container}>
      <div className={style.heading}>
        <h1>Selected Items:</h1>
      </div>
      {cartProducts.length > 0 ? (
        cartProducts.map((product, index) => (
          <div key={index} className={style.productCard}>
            <img src={product.product_photos[0]} alt="Product" />
            <div className={style.productDetails}>
              <p 
              // onClick={() => productPageView(product)}
              >{product.product_title}</p>
              <h2>{product.offer.price}</h2>
              <div className={style.buttons}>
                <div className={style.productcount}>
                  <button className={style.red} onClick={() => countbutton(index, false)}>-</button>
                  <span>{product.count}</span>
                  <button className={style.green} onClick={() => countbutton(index, true)}>+</button>
                </div>
                <button className={style.red} onClick={() => handleRemoveClick(index)}>Remove X</button>
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
      {productScreen && <ProductPage Product={item} />}
    </div>
  );
}

export default CartPageGrid;
