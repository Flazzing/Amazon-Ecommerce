/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { css } from "@emotion/react";
import Product from "../product/product";
import useProduct from "../product/productHooks/productReduxHook";

import { useSelector } from "react-redux";
import { getCartProducts } from "../../redux/shopping_product/selector";

const home_background_image = css`
  width: 100%;
  background-color: #eaeded;
  z-index: -1;
  margin-bottom: -400px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const home_div = css`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1500px;
`;
const home_row = css`
  display: flex;
  z-index: 1;
  margin-left: 5px;
  margin-right: 5px;
`;

const home_container = css``;

function objectLength(productList) {
  var size = 0,
    key;
  for (key in productList) {
    if (productList.hasOwnProperty(key)) size++;
  }
  return size;
}

function Home() {
  useProduct();

  const productList = useSelector(getCartProducts);

  const [productCount, setproductCount] = useState([]);

  var length = objectLength(productList);

  var row_length = 4;
  var total_row = length / 4;

  var row1 = productList.slice(0, 4);
  var row2 = productList.slice(4, 7);
  var row3 = productList.slice(7, 11);
  var row4 = productList.slice(11, 15);

  return (
    <div css={home_div}>
      <div css={home_container}>
        <div css={home_background_image}>
          <img
            src="https://assets.aboutamazon.com/dims4/default/6046c06/2147483647/strip/true/crop/2000x1126+0+0/resize/1320x743!/format/webp/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F68%2Fb5%2Fce0f415540d7bc3262c33bc0d250%2Ftcp-blog-keyart-2000.jpg"
            alt="background"
          />
        </div>

        {/**
         *
         * Here lies the loop to get all product from firebase
         *
         **/}

        <div css={home_row}>
          {row1.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.productName}
              price={product.price}
              image={product.photoUrl}
              rating={product.rating}
              inStock={product.inStock}
            />
          ))}
        </div>

        <div css={home_row}>
          {row2.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.productName}
              price={product.price}
              image={product.photoUrl}
              rating={product.rating}
              inStock={product.inStock}
            />
          ))}
        </div>

        <div css={home_row}>
          {row3.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.productName}
              price={product.price}
              image={product.photoUrl}
              rating={product.rating}
              inStock={product.inStock}
            />
          ))}
        </div>

        <div css={home_row}>
          {row4.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.productName}
              price={product.price}
              image={product.photoUrl}
              rating={product.rating}
              inStock={product.inStock}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
