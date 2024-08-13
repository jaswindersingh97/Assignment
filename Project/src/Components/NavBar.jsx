import React from 'react';
import Style from './NavBar.module.css';
import SearchBar from './SearchBar';
function NavBar() {
  return (
    <div className={Style.container}>
    <img alt='icon'/>
    <SearchBar/>
    <div className={Style.filter}>
        filer
    </div>
    <div className={Style.cart}>
    <img alt='Cart icon'/>
        Cart
    </div>

    </div>
  )
}

export default NavBar
