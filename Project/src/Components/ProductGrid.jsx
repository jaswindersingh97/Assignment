import React, { useEffect, useCallback, useState } from 'react';
import ProductCard from './ProductCard';
import Styles from './ProductGrid.module.css';
import fetchProducts from './../apis/fetchProducts';

function ProductGrid() {
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
    try {
      const response = await fetchProducts();
      console.log(response); // Log the entire response to understand its structure
      
      // Adjust this based on the actual response structure
      const productArray = response.data || []; // Assuming 'data' contains the array of products
      setProducts(productArray); // Set the products state with the array
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  }, []); // Dependency array is empty, so the function is memoized and stable

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className={Styles.container}>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
