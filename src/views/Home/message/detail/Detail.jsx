
import React from 'react'
// 全局作用域
const massges=[
  {id:1,text:'massge001',content:'我爱你,中国'},
  {id:2,text:'massge002',content:'我爱你,老婆'},
  {id:3,text:'massge003',content:'我爱你,孩子'}
]
 
// 局部作用域
export default function Detail(props){
  // 数据类型的隐式转换
  const id=props.match.params.id*1
  // 返回第一个结果为true的数组元素
  const massege=massges.find((item)=>item.id===id)
  return(
   <div>
     <ul>
       <li>ID:{massege.id}</li>
       <li>TEXT:{massege.text}</li>
       <li>CONTENT:{massege.content}</li>
     </ul>
   </div>

  )

}