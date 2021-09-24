import React from "react";
import { Switch } from "react-router-dom";

import PublicRoute from "./PublicRoute";
import Home from "../containers/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Products from "../containers/Products";

// eslint-disable-next-line
export default () => (
  <>
    <Switch>
      <PublicRoute exact path="/" component={Home} />
      <PublicRoute exact path="/login" component={Login} />
      <PublicRoute exact path="/home" component={Home} />
      <PublicRoute exact path="/register" component={Register} />
      <PublicRoute exact path="/products" component={Products} />
    </Switch>
  </>
);
