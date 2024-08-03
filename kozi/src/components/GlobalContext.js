import React from "react";
import { Stack } from "react-bootstrap";
import { rowData } from "./Api";
import { NumberFormater } from "./Watched";
import { useShoppingCart } from "./ShoopingCartContext";

export default function GlobalContext({ id }) {
  const { removeItem } = useShoppingCart();
  const item = rowData.find((i) => i.id === id);

  if (item == null) return null;

  return (
    <Stack direction="horizontal" className="d-flex align-items-center inner">
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <div style={{ display: 'flex', gap: '13px' }}>
          <img src={item.img} alt={item.title} style={{ width: '120px', height: '100px' }} /> {/* Fixed width and height */}
          <div>
            <div>{item.title}</div>
            {item.id > 1 && <span className="text-muted">Multiple Items</span>}
            <div className="text-muted">
              {NumberFormater(item.price)}
            </div>
            <div className="text-muted">
              Total: {NumberFormater(item.price * item.id)} {/* Corrected calculation */}
            </div>
          </div>
        </div>
        <div>
          <button className="btn btn-outline-danger" onClick={() => removeItem(item.id)}>
            Remove
          </button>
        </div>
      </div>
    </Stack>
  );
}
