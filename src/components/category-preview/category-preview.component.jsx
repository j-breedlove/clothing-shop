import React from "react";
import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  StyledLink,
  PreviewContainer,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <StyledLink to={title}>{title.toUpperCase()}</StyledLink>
      </h2>
      <PreviewContainer>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </PreviewContainer>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
