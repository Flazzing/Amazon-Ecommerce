/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import ListIcon from "@material-ui/icons/List";

const header_css = css`
  height: 40px;
  display: flex;
  align-items: center;
  position: sticky;
  background-color: #232f3e;
  top: 0;
  z-index: 100;
  margin: 0px;
  color: white;
`;
const header_nav = css`
  display: flex;
  justify-content: space-evenly;
`;

const header_option = css`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  color: white;
`;

const lower_header_option_list = css`
  display: flex;
  aligh-items: centers;
  color: white;
  margin-left: 20px;
`;
const lower_header_label_all = css`
  font-weight: 600;
`;
const lower_header_label = css`
  margin-left: 10px;
  margin-right: 10px;
`;
function lower_header() {
  return (
    <div css={header_css}>
      <div css={header_nav}>
        <div css={lower_header_option_list}>
          <ListIcon />
          <span css={lower_header_label_all}>All</span>
        </div>

        <div css={header_option}>
          <span css={lower_header_label}>Amazon Home</span>
        </div>
        <div css={header_option}>
          <span>Today's Deals</span>
        </div>
        <div css={header_option}>
          <span>Smart Home</span>
        </div>
        <div css={header_option}>
          <span>Best Sellers</span>
        </div>
        <div css={header_option}>
          <span>Home Improvement</span>
        </div>
        <div css={header_option}>
          <span>Toys & Games</span>
        </div>
        <div css={header_option}>
          <span>Health & Household</span>
        </div>
        <div css={header_option}>
          <span>Cheng's Amazon.com</span>
        </div>
        <div css={header_option}>
          <span>Coupons</span>
        </div>
        <div css={header_option}>
          <span>Home Audio & Theater</span>
        </div>
        <div>
          <span>Amazon Launchpad</span>
        </div>
        <div css={header_option}>
          <span>Pharmacy</span>
        </div>
        <div css={header_option}>
          <span>Shopper Toolkit</span>
        </div>
        <div css={header_option}>
          <span>Amazon Home</span>
        </div>
      </div>
    </div>
  );
}

export default lower_header;
