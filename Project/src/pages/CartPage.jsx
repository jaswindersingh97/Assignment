import React from 'react'
import CartPageGrid from '../Components/Cartpagegrid'
import NavBar from './../Components/NavBar'
import styles from './CartPage.module.css'
function CartPage() {
  return (
    <div className={styles.container}>
    <div className={styles.header}>
      <NavBar/>
    </div>
    <div className={styles.body}>
      <div className={styles.left}>
        <CartPageGrid/>
      </div>
      <div className={styles.right}>
        Right
      </div>
    </div>
    </div>
  )
}

export default CartPage
