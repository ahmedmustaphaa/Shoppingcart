import { createContext, useContext, useEffect, useState } from "react";
import Resultcard from "./Resultcard";
import Swal from "sweetalert2";
const ShoppingCartContext = createContext({});

const initialCartitem=localStorage.getItem('shopping-cart')?JSON.parse(localStorage.getItem('shopping-cart')):[];

export default function ShoppingCartProvider({ children }) {
    const [cartItems, setCartItems] = useState(initialCartitem);
    const [isopen, setisopen] = useState(false);
    useEffect(()=>{
localStorage.setItem('shopping-cart',JSON.stringify(cartItems));
    },[cartItems])

    const opencart = () => setisopen(true);
    const closecart = () => setisopen(false);

    const getCartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    const getQuantity = (id) => {
        const item = cartItems.find(item => item.id === id);
        return item ? item.quantity : 0;
    };

    const increaseQuantity = (id) => {
        setCartItems(currentItems => {
            const itemExists = currentItems.find(item => item.id === id);
            if (!itemExists) {
                return [...currentItems, { id, quantity: 1 }];
            }
            return currentItems.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            );
        });
    };

    const decreaseQuantity = (id) => {
        setCartItems(currentItems => {
            const itemExists = currentItems.find(item => item.id === id);
            if (!itemExists) {
                return currentItems;
            }
            if (itemExists.quantity === 1) {
                return currentItems.filter(item => item.id !== id);
            }
            return currentItems.map(item =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            );
        });
    };

    const removeItem = (id) => {
        Swal.fire({
            title:`are you sure to remove this product ${id}`,
            showCancelButton:true,
        })
       .then((data)=>{
        if(data.isConfirmed){
            setCartItems(currentItems =>
                currentItems.filter(item => item.id !== id)
            );
        }
       })
    };

    return (
        <ShoppingCartContext.Provider value={{
            cartItems,
            increaseQuantity,
            decreaseQuantity,
            removeItem,
            getQuantity,
            isopen,
            opencart,
            closecart,
            getCartItemCount
        }}>
            {children}
            <Resultcard isopen={isopen} />
        </ShoppingCartContext.Provider>
    );
}

export const useShoppingCart = () => {

    return useContext(ShoppingCartContext);
}
