/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { css } from "@emotion/react";
import Product from "../product/product";
import useProduct from "../product/productHooks/productReduxHook";

import { useSelector, useDispatch } from "react-redux";
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

function Home() {
  useProduct();

  const productList = useSelector(getCartProducts);

  const [productCount, setproductCount] = useState([]);

  console.log("selector");
  console.log(productList);

  return (
    <div css={home_div}>
      <div css={home_container}>
        <div css={home_background_image}>
          <img
            src="https://assets.aboutamazon.com/dims4/default/6046c06/2147483647/strip/true/crop/2000x1126+0+0/resize/1320x743!/format/webp/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F68%2Fb5%2Fce0f415540d7bc3262c33bc0d250%2Ftcp-blog-keyart-2000.jpg"
            alt="background"
          />
        </div>
        <div css={home_row}>
          {productList.map((product) => (
            <Product
              id={product.id}
              name={product.productName}
              price={product.price}
              image={product.photoUrl}
              rating={product.rating}
              inStock={product.availableUnit}
            />
          ))}
        </div>
        // conditional rendering
        <div css={home_row}>
          <Product
            id="123"
            name="Book from the tale"
            price={29.99}
            image="https://i5.walmartimages.com/asr/89f40468-7b86-489c-830a-ee392252fa71_1.2f20dcc3b143c5493efe1abbf81867a3.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff"
            rating={5}
          />
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
