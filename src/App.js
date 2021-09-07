import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import routes from './config/routres';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router basename="/portofolio">
      <Switch>
        {routes.map((route, index) => 
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={props => <route.component {...props} {...route.props}/>
            } />
        )}
      </Switch>
    </Router>
  );
}

export default App;
