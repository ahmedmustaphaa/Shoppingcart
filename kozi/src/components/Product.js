import { useState } from "react";
import { rowData } from "./Api";
import { useShoppingCart } from "./ShoopingCartContext";
import { NumberFormater } from "./Watched";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
export default function Product() {
  const [showdata, setShowdata] = useState(rowData);
  const[search,setsearch]=useState('');
  const { getQuantity, increaseQuantity, decreaseQuantity, removeItem} = useShoppingCart();
  localStorage.setItem('cartpro',JSON.stringify(showdata))
  const saveid=(id)=>{
    localStorage.setItem('productid',id)
  }
  const filteration=showdata.filter((item)=>item.title.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className="auto">
    <div className="contain">
    <input value={search} onChange={((e)=>setsearch(e.target.value))} id="search" placeholder="search on your favourite product"></input> 
   
    </div>
    <div className="collection">
    <div className="container">
      {filteration.length==0?<h1 className="no-product">sorry product not found...</h1>:(filteration.map((item) => {
        const quantity = getQuantity(item.id);
        return (
          <div className="cardd" key={item.id}>
            <img src={item.img} alt={item.title} id="image"/>
            <div className="towside" style={{display:'flex',alignItems:'center'}}>
              <Link to={`/item/${item.id}`} onClick={()=>saveid(item.id)} id="none"><h2>{item.title}</h2>  </Link>
              <h2>{NumberFormater(item.price)}</h2>
            </div>
            <p>{item.desc}</p>
            {quantity === 0 ? (
              <button className="btn btn-outline-primary cart" id="cart" onClick={() => increaseQuantity(item.id)}>
                Add to Cart
              </button>
            ) : (
                <>
              <div className="dis">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  disabled={quantity === 1}
                  className="btn btn-outline-primary"
                >
                  -
                </button>
                <h1>{quantity}</h1>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
              <div>
              <button onClick={()=>removeItem(item.id)} className="btn btn-outline-success"  id="remove">remove</button>
              </div>
              </>
            )}
          </div>
        );
      }))}
    </div>
    </div>
    </div>
  );
}