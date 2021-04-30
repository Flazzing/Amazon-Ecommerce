/** @jsxImportSource @emotion/react */

import Header from "./components/header/app";
import Home from "./components/home/home";
import { css } from "@emotion/react";
import "./app.css";

const header_css = css`
  padding: 0px;
  margin: 0px;
`;

function App() {
  return (
    <div css={header_css}>
      <div>
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
