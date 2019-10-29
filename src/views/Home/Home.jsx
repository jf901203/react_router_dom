import React, { Component } from 'react'
import {NavLink,Route,Redirect,Switch,Link} from 'react-router-dom'


export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home组件</h1>
        
        <div className="row">
          <div className="col-xs-4">
          <ul class="nav nav-pills nav-stacked">
            <li>
              <NavLink to="/news">news</NavLink>
            </li>
            <li>
              <NavLink to="/pages">pages</NavLink>
            </li>
            <li>
              <NavLink to="/views">views</NavLink>
            </li>
          </ul>
          </div>
          <div className="col-xs-8">
            asfagf
          </div>
        </div>
        
      </div>
    )
  }
}
