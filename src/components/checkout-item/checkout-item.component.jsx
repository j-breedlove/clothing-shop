import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  CheckoutItemContainer,
  ImageContainer,
  NameSpan,
  QuantitySpan,
  ArrowDiv,
  ValueSpan,
  PriceSpan,
  RemoveButtonDiv,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <NameSpan>{name}</NameSpan>
      <QuantitySpan>
        <ArrowDiv onClick={removeItemHandler}>&#10094;</ArrowDiv>
        <ValueSpan>{quantity}</ValueSpan>
        <ArrowDiv onClick={addItemHandler}>&#10095;</ArrowDiv>
      </QuantitySpan>
      <PriceSpan>{price}</PriceSpan>
      <RemoveButtonDiv onClick={clearItemHandler}>&#10005;</RemoveButtonDiv>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
