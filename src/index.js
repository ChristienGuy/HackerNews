import "core-js";
import React, { Fragment } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { BottomNav } from "Components/Navigation";

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
