import { createContext, useEffect,useState } from "react";

export const AppContext=createContext();

export const AppProvider=({children}) => {
    const [cartProducts,setCartProducts]=useState(JSON.parse(localStorage.getItem("cartProducts")) || [])
    useEffect(()=>{
        localStorage.setItem("cartProducts",JSON.stringify(cartProducts));
    },[cartProducts])
    return(
        <AppContext.Provider value={{
            cartProducts,
            setCartProducts
            }}>
                {children}
            </AppContext.Provider>
    );
};
