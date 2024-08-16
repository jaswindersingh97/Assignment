import React, { useEffect, useState } from 'react';
import Style from './NavBar.module.css';
import logo from './../assets/logonew.jpg';
import cart from './../assets/cart icon.png';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  const { cartProducts, setSearchQuery } = useContext(AppContext);
  const [search, setSearch] = useState("");

  const searchButtonClk = () => {
    setSearchQuery(search);
    console.log("Search button clicked",search);
    navigate("/");
    // setSearch("");
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setSearchQuery(search);
      console.log("Enter pressed", search);
      navigate("/");
      // setSearch("");
    }
  };

  return (
    <div className={Style.container}>
      <img src={logo} alt='icon' onClick={() => navigate("/")} />
      {/* <div className={Style.SearchBar}>
        <input
          type='text'
          placeholder='Enter the text to search.'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleEnter} 
        />
        <svg onClick={searchButtonClk} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
          <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
        </svg>
      </div> */}
      <div className={Style.cart} onClick={() => navigate("/cart")}>
        <span>{cartProducts.length}</span>
        <img src={cart} alt='Cart icon'/>
      </div>
    </div>
  )
}

export default NavBar;
