import React from "react";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";
import { CartItem } from "@/app/types/product";

interface CartRowProps {
  item: CartItem;
  onQuantityChange: (item: CartItem, quantityChange: number) => void;
  onRemove: (id: string) => void;
}

const CartRow: React.FC<CartRowProps> = ({ item, onQuantityChange, onRemove }) => {
  return (
    <div className="cart-row">
      <div className="cart-cell product">
        <button className="remove-btn" onClick={() => onRemove(item.id)}>
          <ClearIcon />
        </button>
        <Image
          src={item.image}
          alt={item.name}
          width={50}
          height={50}
          className="cart-img"
        />
        <span className="product-name">{item.name}</span>
      </div>

      <div className="cart-cell price">${item.price.toFixed(2)}</div>

      <div className="cart-cell quantity">
        <div className="qty-control">
          <button onClick={() => onQuantityChange(item, 1)}>
            <AddIcon />
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => onQuantityChange(item, -1)}>
            <RemoveIcon />
          </button>
        </div>
      </div>

      <div className="cart-cell subtotal">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
    </div>
  );
};

export default CartRow;
