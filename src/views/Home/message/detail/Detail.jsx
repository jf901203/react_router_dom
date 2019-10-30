import React, { Component } from 'react'

export default class Detail extends Component {
  // 详情页的数据库
  state={
    messages:[
      {id:1,text:'message001',comtent:'我爱你,中国'},
      {id:2,text:'message002',comtent:'我爱你,老婆'},
      {id:3,text:'message003',comtent:'我爱你,孩子'}
    ],
    message:null
  }


  componentDidMount(){
    
   const id=this.props.match.params.id*1
   const {messages}=this.state
   const message=messages.find((item)=>item.id===id)

   this.setState({
    message
   })
   
   
  }
  // 根据条件查询数据库
  render() {
   
    const {message}=this.state
    
    return (
      <div>
        <h1>sss</h1>
        <ul>
          <li>1111</li>
        </ul>
      </div>
    )
  }
}
