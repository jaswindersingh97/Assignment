import React, { useEffect, useCallback, useState } from 'react';
import ProductCard from './ProductCard';
import Styles from './ProductGrid.module.css';
import fetchProducts from './../apis/fetchProducts';

function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 

  const getProducts = useCallback(async () => {
    try {
      setLoading(true); 
      const response = await fetchProducts();
      console.log(response);
      const productArray = response.data || [];
      setProducts(productArray); 
    } catch (error) {
      console.error('Failed to fetch products:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className={Styles.container}>
      {loading ? (
        <div className={Styles.loading}>Loading...</div> 
      ) : (
        products.slice(0, 16).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))
      )}
    </div>
  );
}

export default ProductGrid;
