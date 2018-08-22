import "babel-polyfill";
import React, { Fragment } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { BottomNav } from "Components/shared/Navigation";
import { injectGlobal } from "styled-components";

// PAGES
import Home from "Pages/Home";
import New from "Pages/New";
import Item from "Pages/Item";

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Assistant');
  body {
    padding-bottom: 48px;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Assistant', sans-serif;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;



const Index = () => {
  return (
    <Fragment>
      <Router>
        <Home path="/" />
        <New path="new" />
        <Item path="item/:id" />
      </Router>
      <BottomNav />
    </Fragment>
  );
};

render(<Index />, document.getElementById("app"));
