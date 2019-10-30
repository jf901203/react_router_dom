import React, { Component } from 'react'
import {NavLink,Route} from 'react-router-dom'
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
  render() {
    const {messages}=this.state
  
    // /home/message/:id
    return (
      <div>
        <ul>
          {
            messages.map((item,index)=>
            <li key={index}>
              <a href={`/home/message/detail/${item.id}`}>{item.text}</a>
              <button>查看push详情</button>
              <button>查看replace详情</button>
            </li>)
          }
        </ul>
        <div>
          <Route path="/home/message/detail/:id" component={Detail}></Route>
        </div>
      </div>
    )
  }
}
