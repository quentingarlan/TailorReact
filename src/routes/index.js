import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// import Store from './pages/store';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import Cart from "../pages/cart/cart";
import FirstPant from "../pages/pants/first-pant";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FirstPant} />
        <Route path="/about" component={About} />
        <Route path="/store" component={FirstPant} />
        <Route path="/cart" component={Cart} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;