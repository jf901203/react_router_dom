import React, { Component } from 'react'
import {Route,NavLink} from 'react-router-dom'
import Detail from './detail/Detail'
export default class Message extends Component {
  state={
    messages:[]
  }
  componentDidMount(){
    
   
    setTimeout(()=>{
      const messages=[
        {id:1,text:'message001'},
        {id:2,text:'message002'},
        {id:3,text:'message003'}
      ]
      this.setState({
        messages
      })

    },1000)
  }
  
  pushLink=(id)=>{
    this.props.history.push(`/home/message/detail/${id}`)
  }

  replaceLink=(id)=>{
    this.props.history.replace(`/home/message/detail/${id}`)
  }

  handleBack=()=>{
    this.props.history.goBack()
  }
  handleFor=()=>{
    this.props.history.goForward()
  }
  render() {
    const {messages}=this.state
  
    // /home/message/:id
    return (
      <div>
        <ul>
          {
            messages.map((item,index)=>
            <li key={index}>
              <NavLink to={`/home/message/detail/${item.id}`}>{item.text}</NavLink>
              <button onClick={()=>{this.pushLink(item.id)}}>查看push详情</button>
              <button onClick={()=>this.replaceLink(item.id)}>查看replace详情</button>
            </li>)
          }
        </ul>
        <p>
          <button onClick={this.handleBack}>后退</button>
          <button onClick={this.handleFor}>前进</button>
        </p>
        <div>
          
          <Route path="/home/message/detail/:id" component={Detail}></Route>
        </div>
      </div>
    )
  }
}
