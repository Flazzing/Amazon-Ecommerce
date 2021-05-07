import React, { useState, useEffect } from "react";
import useProduct from "./productHook";
import { addProducts_shop } from "../../../redux/shopping_product/action";
import { useDispatch } from "react-redux";

function ProductList() {
  const { products, isLoading } = useProduct();
  const dispatch = useDispatch();

  useEffect(() => {
    products.forEach((element) => {
      const addProducts = addProducts_shop(element);
      dispatch(addProducts);
    });
  }, [products]);

  return;
}

export default ProductList;
