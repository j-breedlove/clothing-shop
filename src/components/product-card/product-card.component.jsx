import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  ProductCardContainer,
  ProductImage,
  FooterDiv,
  NameSpan,
  PriceSpan,
  AddToCartButton,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <ProductImage src={imageUrl} alt={name} />
      <FooterDiv>
        <NameSpan>{name}</NameSpan>
        <PriceSpan>{price}</PriceSpan>
      </FooterDiv>
      <AddToCartButton $buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </AddToCartButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
