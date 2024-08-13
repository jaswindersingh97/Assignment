import React from 'react'
import ProductCard from './ProductCard';
import Styles from './ProductGrid.module.css';
function ProductGrid() {
  return (
    <div className={Styles.container}>
          <ProductCard/>
      <ProductCard/>
    </div>
  )
}

export default ProductGrid
