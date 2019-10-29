import React, { Component } from 'react'
import {NavLink,Route,Redirect,Switch} from 'react-router-dom'

import About from './views/About/About'
import Home from './views/Home/Home'
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2">
            <div className="page-header">
              <h1>Hello React-Roter</h1>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <NavLink className="list-group-item activeClass" to="/about">
                About
              </NavLink>
              <NavLink className="list-group-item" to="/home">
                Home
              </NavLink>
              
            </div>
          </div>
          <div className="col-xs-6">
          <div className="panel panel-default">
              <div className="panel-body">
                   <Switch>
                     <Route path="/about" component={About}></Route>
                     <Route path="/home" component={Home}></Route>
                     <Redirect to="/about" />
                   </Switch>
              </div>
          </div>
          </div>
        </div>
         
      </div>
    )
  }
}
