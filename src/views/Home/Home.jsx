import React, { Component } from 'react'
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
import News from './news/News'
import Message from './message/Message'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home组件</h1>
        <div className="row">
          <ul className="nav navbar-nav">
              <li>
                <NavLink to="/home/news">News</NavLink>
              </li>
              <li>
                <NavLink to="/home/message">Message</NavLink>
              </li>
              
          </ul>
        </div>
        <div className="row">
          <Switch>
             <Route path="/home/news" component={News}></Route>
             <Route path="/home/message" component={Message}></Route>
             <Redirect to="/home/news"></Redirect>
          </Switch>
          
        </div>
        </div>
        
    )
  }
}
