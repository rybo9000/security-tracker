import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "../Main/Main.js";
import NotFound from "../NotFound/NotFound.js";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
