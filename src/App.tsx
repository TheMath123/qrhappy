import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"

import './styles/global.scss'

//pages
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { AuthContextProvider } from "./contexts/AuthContext";

export default function App() {

  return(
    <BrowserRouter>
      <AuthContextProvider>
        <Switch> 
          <Route path='/' exact component={Login}/>
          <Route path='/home' component={Home}/>
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  )
}
