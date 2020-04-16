import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../Home/Home";
import Clients from "../Clients/Clients";
import SecurityItems from "../SecurityItems/SecurityItems";
import Categories from "../Categories/Categories";
import NotFound from "../NotFound/NotFound";
import NewClient from "../NewClient/NewClient";
import NewSecurity from "../NewSecurity/NewSecurity";
import NewCategory from "../NewCategory/NewCategory";
import EditClient from "../EditClient/EditClient";
import Report from "../Report/Report";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/clients" component={Clients} />
      <Route path="/categories" component={Categories} />
      <Route path="/security" component={SecurityItems} />
      <Route path="/addclient" component={NewClient} />
      <Route path="/addsecurity" component={NewSecurity} />
      <Route path="/addcategory" component={NewCategory} />
      <Route path="/editclient/:id" component={EditClient} />
      <Route path="/report/:id" component={Report} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
