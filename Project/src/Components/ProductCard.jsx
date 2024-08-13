import React from 'react';
import styles from './ProductCard.module.css';
function ProductCard() {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <img src={'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'} alt='Product Image'/>
        </div>
        <div className={styles.down}>
            <p>Nike air MX Super 2500 -Red</p>
            <h2>$449</h2>
            <div className={styles.Addonbutton}>
                <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                "Add to cart"
            </div>
        </div>
    </div>
  )
}

export default ProductCard
