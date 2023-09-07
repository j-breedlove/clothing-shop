import React from "react";
import {
  CartItemContainer,
  ItemDetails,
  NameSpan,
  PriceSpan,
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <NameSpan>{name}</NameSpan>
        <PriceSpan>
          {quantity} x ${price}
        </PriceSpan>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
