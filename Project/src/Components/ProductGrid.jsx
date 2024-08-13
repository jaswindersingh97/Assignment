import React from 'react'
import Styles from './ProductGrid.module.css';
import ProductCard from './ProductCard';
function ProductGrid() {
  return (
    <div className={Styles.container}>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>

    </div>
  )
}

export default ProductGrid
