import "core-js/features/promise";
import React, { Fragment } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { BottomNav } from "Components/shared/Navigation";
import { injectGlobal } from "styled-components";

import Home from "Pages/Home";
import Loadable from "react-loadable";

const Loading = () => <p>Loading...</p>;

const AsyncNew = Loadable({
  loader: () => import("Pages/New"),
  loading: Loading
});
const AsyncItem = Loadable({
  loader: () => import("Pages/Item"),
  loading: Loading
});

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
        <AsyncNew path="new" />
        <AsyncItem path="item/:id" />
      </Router>
      <BottomNav />
    </Fragment>
  );
};

render(<Index />, document.getElementById("app"));
