import styles from './ProductCard.module.css';
import cart from './../assets/whitecart.png';
import { useState } from 'react';

function ProductCard({ product }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const buttonclk = () => {
    setSelectedProduct(product); // Set the clicked product as the selected one

    // Retrieve the current cart products from localStorage
    const cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];

    // Add the selected product to the cart
    const updatedCartProducts = [...cartProducts, product];

    // Save the updated cart to localStorage
    localStorage.setItem("cartProducts", JSON.stringify(updatedCartProducts));

    console.log("Updated Cart Products:", updatedCartProducts); // Log the updated cart
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <img src={product.product_photos[0]} alt='Product Image' />
      </div>
      <div className={styles.down}>
        <p>{product.product_title}</p>
        <h2>{product.offer.price}</h2>
        <div className={styles.Addonbutton} onClick={buttonclk}>
          <img src={cart} alt="Add to cart icon" />
          <span>Add to cart</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
