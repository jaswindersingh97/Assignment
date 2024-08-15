import { createContext, useEffect,useState } from "react";

export const AppContext=createContext();

export const AppProvider=({children}) => {
    const [cartProducts,setCartProducts]=useState(JSON.parse(localStorage.getItem("cartProducts")) || [])
    useEffect(()=>{
        localStorage.setItem("cartProducts",JSON.stringify(cartProducts));
    },[cartProducts])
    let totalPrice = cartProducts.reduce((acc, curval) => {
        const price = parseFloat(curval.offer.price.replace('$', ''));
        return acc + (price * curval.count);
      }, 0);
    const [searchQuery,setSearchQuery]=useState("Nike shoes");
    return(
        <AppContext.Provider value={{
            cartProducts,
            setCartProducts,
            totalPrice,
            searchQuery,
            setSearchQuery
            }}>
                {children}
            </AppContext.Provider>
    );
};
