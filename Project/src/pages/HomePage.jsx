import React from 'react'
import styles from './HomePage.module.css';
import NavBar from './../Components/NavBar';
import ProductGrid from './../Components/ProductGrid';
import SideNav from '../Components/SideNav';
function HomePage() {
  return (
    <div> 
    <div className={styles.container}>
	<div className={styles.header}><NavBar/></div>
	<div className={styles.sidenav}><SideNav/></div>
	<div className={styles.body}><ProductGrid/></div>
	<div className={styles.footer}>footer</div>
</div>
    </div>
  )
}

export default HomePage
