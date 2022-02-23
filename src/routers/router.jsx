import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "../components/pages/mainpage/mainpage";
import Dashboard from "../dashboard/dashboard";
import AddCart from "../components/pages/addcart/addcart";
import Success from "../components/ordersuccessfull/success";


function Router() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MainPage} /> 
            <Route exact path="/addcart" component={AddCart} />           
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/success" component={Success} />
            
          </Switch>
        </BrowserRouter>
      </div>
    )
}
export default Router