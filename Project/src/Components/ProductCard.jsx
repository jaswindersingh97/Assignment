import styles from './ProductCard.module.css';
import cart from './../assets/whitecart.png';
import { useState } from 'react';
import { useContext } from 'react';
import {AppContext} from './../context/AppContext';
function ProductCard({ product }) {

  const [selectedProduct, setSelectedProduct] = useState(null);
  const {cartProducts,setCartProducts}=useContext(AppContext);
  const buttonclk = () => {
    setSelectedProduct(product); 
    const updatedCartProducts = [...cartProducts, product];
    setCartProducts(updatedCartProducts);
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
        {
          (selectedProduct)?
          <div className={styles.AddedPopup}> Added to cart</div>:
          <div className={styles.Addonbutton} onClick={buttonclk}>
          <img src={cart} alt="Add to cart icon" />
          <span>Add to cart</span>
        </div>
        }
      </div>
    </div>
  );
}

export default ProductCard;
