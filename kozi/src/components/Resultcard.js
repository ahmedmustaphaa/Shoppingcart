import { Offcanvas } from 'react-bootstrap'
import React from 'react';
import GlobalContext from './GlobalContext';
import { NumberFormater } from './Watched';
import { useShoppingCart } from './ShoopingCartContext';
import { rowData } from './Api';
export default function Resultcard({isopen}) {


    const {cartItems,closecart}=useShoppingCart();
  return (
    <div >
    <Offcanvas show={isopen} placement='end' onHide={closecart}>
    <Offcanvas.Header closeButton>
    <Offcanvas.Title>
    cart
    </Offcanvas.Title>
    </Offcanvas.Header>
    
    <Offcanvas.Body>
    {cartItems.map((item)=>{
        return(
            <div >
            <GlobalContext key={item.id} {...item}/>
          
            </div>
        )
    })}
    <div className="mt-3">
                    Total:{" "}
                    {NumberFormater(
                        cartItems.reduce((total, cartItem) => {
                            const item = rowData.find((i) => i.id === cartItem.id);
                            return total + (item ? item.price * cartItem.quantity : 0);
                        }, 0)
                    )}
                </div>
    </Offcanvas.Body>
    </Offcanvas>

    </div>
  )
}
