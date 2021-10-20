import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"

import './styles/global.scss'

//pages
// import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

export default function App() {

  return(
    <BrowserRouter>
        <Switch> 
          <Route path='/' exact component={Login}/>
        </Switch>
    </BrowserRouter>
  )
}
