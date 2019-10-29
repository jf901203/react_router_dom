
4. 前端路由：

   - 注册路由：<Route path='/about' component={About}>
   - 当前端浏览器的hash变为#about时，当前路由组件就会变为About组件
   - 前端路由监听的是url的变化 url的变化会与前端注册的路由path匹配 匹配上了就切换对应的组件   
   - 前端路由监听的是url的变化
  
5. 前端路由是前端路由 后端路由是后台路由

6. 前端的路由对应着组件 

7. ajax请求发送的path会匹配后端的path 并返回响应数据


##  后端的路由处理的是前端提交的请求 

1. 路劲
2. 回调函数


## 前端路由处理前端的请求

1. 路劲
2. 组件


## hash 哈希值

1. hash值会被历史记录记录
2. hash是一个锚点 从一个位置跳到另一个位置
3. 跳的过程不会发送请求

## https://reacttraining.com/react-router

## react-router

1. 路由组件
   - <BrowserRouter>  不带hash
   - <HashRouter> 带hash
   - <Redirect> 重定向路由 自动请求路由
   - <Link>  路由连接
   - <NavLink> 导航连接
   - <Route>  注册路由
   - <Switch> 切换 可以包含多个route

2. history对象   
   - history.replace()
   - history.push()

3. match 对象

4. withRouter对象

##路由模式

1. <BrowserRouter>  不带hash
2. <HashRouter> 带hash

## web react-router

1. npm install --save react-router-dom


## 组件

1. 非路由组件
2. 路由组件 ===>对应路由地址(path)的组件