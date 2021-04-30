/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import React from "react";
import "./product.css";

function Product() {
	return (
		<div className="product">
			<div className="product_name">
				<p>This is a product called product</p>
				<p className="product_price">
					<small>$</small>
					<strong>12.25</strong>
				</p>
				<div className="product_rating">
					<p>⭐</p>
				</div>
			</div>

			<img
				src="https://i5.walmartimages.com/asr/89f40468-7b86-489c-830a-ee392252fa71_1.2f20dcc3b143c5493efe1abbf81867a3.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff"
				alt=""
			/>

			<button className="product_purchase_button">Add to cart</button>
		</div>
	);
}

export default Product;
