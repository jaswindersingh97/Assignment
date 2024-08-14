import React ,{useState,useEffect} from 'react'
import CartPageGrid from '../Components/Cartpagegrid'
import NavBar from './../Components/NavBar'
import styles from './CartPage.module.css'
function CartPage() {
  const [cartProducts, setCartProducts] = useState([]);

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
      <NavBar cartProducts={cartProducts}/>
    </div>
    <div className={styles.body}>
      <div className={styles.left}>
        <CartPageGrid cartProducts={cartProducts} setCartProducts={setCartProducts}/>
      </div>
      <div className={styles.right}>
        Right
      </div>
    </div>
    </div>
  )
}

export default CartPage
