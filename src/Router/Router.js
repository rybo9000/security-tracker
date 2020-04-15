import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../Home/Home";
import Clients from "../Clients/Clients";
import SecurityItems from "../SecurityItems/SecurityItems";
import Categories from "../Categories/Categories";
import NotFound from "../NotFound/NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/clients" component={Clients} />
      <Route path="/categories" component={Categories} />
      <Route path="/security" component={SecurityItems} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
