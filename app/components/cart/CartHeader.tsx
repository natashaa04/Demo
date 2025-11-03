import React from "react";

const CartHeader = () => {
  return (
    <div className="cart-row cart-header-row">
      <div className="cart-cell product">PRODUCT</div>
      <div className="cart-cell price">PRICE</div>
      <div className="cart-cell quantity">QUANTITY</div>
      <div className="cart-cell subtotal">SUBTOTAL</div>
    </div>
  );
};

export default CartHeader;
