import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "../pages/mainpage/mainpage";
import Dashboard from "../pages/dashboard/dashboard";
import Success from "../pages/ordersuccessfull/success"
import AddCart from "../pages/addcart/addcart"
import MyWishList from "../pages/wishlist/WishList";



function Router() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MainPage} /> 
            <Route exact path="/addcart" component={AddCart} />           
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/success" component={Success} />
            <Route exact path="/wishlist" component={MyWishList} />
          </Switch>
        </BrowserRouter>
      </div>
    )
}
export default Router