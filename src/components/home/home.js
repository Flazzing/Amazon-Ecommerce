/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

const home_background = css`
	background-color: #eaeded;
`;

function home() {
	return (
		<div css={home_background}>
			<div></div>
		</div>
	);
}

export default home;
