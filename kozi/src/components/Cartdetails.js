import React from 'react';
import { useParams } from 'react-router-dom';
import { rowData } from './Api';

export default function Cartdetails() {
  const { id } = useParams();
  const product = rowData.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='cart-details'>
    <div className='cart'>
    <img src={product.img}></img>
      <h1>{product.title}</h1>
    <h2>{product.desc}</h2>
 
    </div>
    </div>
  );
}
