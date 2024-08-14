import React from 'react'
import styles from './HomePage.module.css';
import NavBar from './../Components/NavBar';
import ProductGrid from './../Components/ProductGrid';
import SideNav from '../Components/SideNav';
function HomePage() {
  return (
    <> 
    <div className={styles.container}>
	    <div className={styles.header}><NavBar/></div>
      <div className={styles.body}>
	      <div className={styles.left}><SideNav/></div>
	      <div className={styles.right}><ProductGrid/></div>
      </div>
	    <div className={styles.footer}>footer</div>
</div>
    </>
  )
}

export default HomePage
