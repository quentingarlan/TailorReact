import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import About from '../pages/about';
import NotFound from '../pages/notFound';
import Cart from "../pages/cart/cart";
import FirstPant from "../pages/pants/first-pant";
import Explanation from "../pages/tailors/explanation";
import Tailors from "../pages/tailors/tailors";
import Home from '../pages/home';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/store" component={FirstPant} />
        <Route path="/cart" component={Cart} />
        <Route path="/explanation" component={Explanation} />
        <Route path="/tailors" component={Tailors} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;