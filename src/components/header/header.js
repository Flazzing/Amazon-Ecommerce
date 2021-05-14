/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCartProducts } from "../../redux/cart/selector";

const header_css = css`
  height: 60px;
  display: flex;
  align-items: center;
  position: sticky;
  background-color: #131921;
  top: 0;
  z-index: 100;
  margin: 0px;
`;

const header_logo = css`
  width: 100px;
  object-fit: contain;
  margin: 0 20px;
  margin-top: 18px;
`;

const header_search = css`
  display: flex; /* Stretch as long as possible */
  flex: 1;
  align-items: center;
  border-radius: 24px;
`;

const header_search_input = css`
  height: 12px;
  padding: 10px;
  border: none;
  width: 100%;
`;

const header_search_icon = css`
  padding: 5px;
  height: 22px;
  background-color: #cd9042;
`;

const header_option = css`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  color: white;
`;

const header_nav = css`
  display: flex;
  justify-content: space-evenly;
`;

const header_option_one = css`
  font-size: 13px;
`;

const header_option_two = css`
  font-size: 15px;
  font-weight: 600;
`;

const header_option_cart = css`
  display: flex;
  aligh-items: centers;
  color: white;
  margin-top: 5px;
  margin-left: 5px;
  padding-right: 20px;
`;

const header_option_cart_icon = css``;

const header_option_cart_totalItem = css`
  margin-left: 10px;
  margin-right: 10px;
`;

function Header() {
  const cartList = useSelector(getCartProducts);

  return (
    <div css={header_css}>
      <Link to="/">
        <img
          css={header_logo}
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div css={header_search}>
        <input css={header_search_input} type="text" />
        <SearchIcon css={header_search_icon} />
      </div>

      <div css={header_nav}>
        <div css={header_option}>
          <span css={header_option_one}>Hello</span>
          <span css={header_option_two}>Sign in</span>
        </div>

        <div css={header_option}>
          <span css={header_option_one}>Returns</span>
          <span css={header_option_two}>& Orders</span>
        </div>

        <div css={header_option}>
          <span css={header_option_one}>Your</span>
          <span css={header_option_two}>Prime</span>
        </div>

        <Link to="/cart">
          <div css={header_option_cart}>
            <ShoppingBasketIcon css={header_option_cart_icon} />
            <span css={header_option_cart_totalItem}>{cartList.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
