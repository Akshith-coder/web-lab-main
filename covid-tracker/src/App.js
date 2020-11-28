import React, { useState, useEffect } from "react";
import About from "./about";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home";
import { NavLink } from "react-router-dom";

const App = () => {
  return (
    <Router>
         <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/about" component={About} />
           </Switch>
       </Router>
   
  );
};

export default App;


 