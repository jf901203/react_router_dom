import React, { Component } from 'react'

export default class News extends Component {
  state={
    list:[
      'news001',
      'news002',
      'news003'
    ]
  }
  render() {
    const {list}=this.state
    return (
      <div>
        <ul>
          {
            list.map((item,index)=><li key={index}>{item}</li>)
          }
        </ul>
      </div>
    )
  }
}
