import React ,{useState,useEffect,useContext} from 'react'
import CartPageGrid from '../Components/Cartpagegrid'
import NavBar from './../Components/NavBar'
import styles from './CartPage.module.css'
import { AppContext } from '../context/AppContext'
import CartSummary from '../Components/CartSummary'
function CartPage() {
  const {cartProducts, setCartProducts} = useContext(AppContext)

  const loadProducts = () => {
    const storedProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
    setCartProducts(storedProducts);
  };

  useEffect(() => {
    loadProducts(); 
  }, []);

  return (
    <div className={styles.container}>
    <div className={styles.header}>
      <NavBar/>
    </div>
    <div className={styles.body}>
      <div className={styles.left}>
        <CartPageGrid cartProducts={cartProducts} setCartProducts={setCartProducts}/>
      </div>
      <div className={styles.right}>
        <CartSummary/>
      </div>
    </div>
    </div>
  )
}

export default CartPage
