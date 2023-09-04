import React from "react";
import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../../components/categories-preview/categories-preview.component";
import Category from "../../components/category/category.component";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path={":categoryId"} element={<Category />} />
    </Routes>
  );
};

export default Shop;
