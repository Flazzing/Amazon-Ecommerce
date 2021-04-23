/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

import Product from "../product/product"

const home_background_image = css`
	background-color: #eaeded;
	z-index: -1;
	margin-bottom: -150px;
	mask-image: linear-gradient(to bottom, rgba(0,  0,  0,  1), rgba(0,  0,  0,  0));
`;

const home_div = css``;
const explore_product = css ``;

function home() {
	return (
		<div css={home_div}>
			<div css={home_background_image}>
				<img
					src="https://assets.aboutamazon.com/dims4/default/6046c06/2147483647/strip/true/crop/2000x1126+0+0/resize/1320x743!/format/webp/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F68%2Fb5%2Fce0f415540d7bc3262c33bc0d250%2Ftcp-blog-keyart-2000.jpg"
					alt=""
				/>
			</div>

		<div css={home_div}>
			<Product />
			{/*product */}
			{/*product */}
			{/*product */}			
		</div>

		<div css={home_div}>
			{/*product */}
			{/*product */}
			{/*product */}
		</div>

		<div css={explore_product}>
			{/*slide left product */}
			{/*slide left product */}
			{/*slide left product */}
		</div>



		</div>
	);
}

export default home;
