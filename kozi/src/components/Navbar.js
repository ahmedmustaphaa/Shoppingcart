import React from 'react'
import { Link, useParams } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useShoppingCart } from './ShoopingCartContext';
import { FaShoppingCart } from "react-icons/fa";
export default function Navbar() {
   const {opencart,closecart,getCartItemCount}=useShoppingCart();
   const {id}=useParams();
   console.log(id);
  return (
    <div className='ahmed'>
   <div className='links'>
  
   <Link id='linl' to="/Cartdetails/:id">Cartdetails</Link>
   <Link id='linl' to="/product">product</Link>
   </div>
  <div className='d-flex gap-10px ' onClick={opencart}  id="icons">
  <div className="shopping-icon"><FaShoppingCart/></div>
  <div className='get-count'>{getCartItemCount}</div>
  </div>
    </div>
  )
}
