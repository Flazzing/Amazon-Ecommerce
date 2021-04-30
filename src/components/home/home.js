/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

import Product from "../product/product";

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

function home() {
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
          <Product />
          <Product />
        </div>
        <div css={home_row}>
          <Product />
          <Product />
          <Product />
        </div>
        <div css={home_row}>
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
}

export default home;
