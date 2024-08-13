import React from 'react';
import styles from './ProductCard.module.css';
function ProductCard() {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <img src={'https://www.w3schools.com/w3images/jeans3.jpg'} alt='Product Image'/>
        </div>
        <div className={styles.down}>
            <h1>Product Name</h1>
            <h2>Product price</h2>
            <p>Description</p>
            <button>Add to cart</button>
        </div>
    </div>
  )
}

export default ProductCard
