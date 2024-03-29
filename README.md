## React-router路由的理解

1. react的一个插件库
2. 专门用来实现一个SPA应用
3. 基于react的项目基本都会用到此库
4. 基于react的库 意思说依赖于react库去实现
5. 基于jquery的插件 意思是说必须把jquery引入才能实现插件的功能


## SPA的理解

1. 单页Web应用(single page application SPA)
2. 整个应用只有一个完整的页面
3. 点击页面中的链接不会刷新页面 本身也不会向服务器发请求
4. 当点击路由链接时，只会做页面的局部更新
5. 数据都需要通过ajax请求获取 并在前端异步展现
6. 路由链接本身不会向服务器发送请求的 
7. 路由组件内部会发送ajax请求 获取数据 异步显示数据
8. 路由链接只会切换不同的组件

## 单页应用的链接称路由连接

1. 路由跳转
2. 点击路由不会发送请求
3. 路由连接只会切换组件

## 路由的理解

1. 什么是路由

   - 一个路由就是一个映射关系(key:val)
   - key为路由路劲，value可能是function/component
   - 后台路由的value对应回调函数
   - 前端路由的value对应组件
   
2. 路由的分类 

   - 后端路由：node服务器路由 value是function(req,res){}，用来处理客户端提交的请求并返回一个响应数据
   - 前端路由：浏览器端路由，value是component，当请求的是路由path时，浏览器端没有发送http请求，但是界面会显示对应的组件

3. 后台路由    router路由器常用的两个方法 get post

   - 注册路由：router.get(path,function(req,res){}) 路劲对应回调函数 路由就是一个映射关系 一个key对应着一个value
   - key===>path  value===>回调函数
   - 当node接收到一个请求时，根据请求路劲找到匹配的路由，调用路由中的函数来处理请求并返回响应数据
   - 后端的路由处理前端浏览器提交的请求的
   - 前端发送的ajax请求中请求path会与后端路由的注册的path做匹配 匹配上了就会触发回调函数 处理请求 返回响应数据
   - 后端路由监听的是ajax发送的请求
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
   - <Redirect> 重定向路由 自动跳转路由 默认跳转to="/home"
   - <Link>  路由连接
   - <NavLink> 导航连接
   - <Route>  注册路由 也是显示路由组件的地方
   - <Switch> 切换 可以包含多个route 切换路由的时候 对应显示相应的路由组件

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


##嵌套路由流程 父组件必须是路由组件

1. 路由组件中的路由就叫做嵌套路由
2. 编写路由组件
3. 在父路由组件中指定
    - 路由连接 :<NavLink>
    - 注册路由 :<Route>
    - 多个路由组件的必须用Switch 包含Route路由组件
    - Route注册路由组件


## 通过路由连接传递数据

## 向路由组件传递参数数据 通过路由连接传递数据

1. 一般的组件会以标签的形式展现   <News/>
2. 路由组件并没有以标签的形式展现 <Route path="/home/news" component={News}></Route>
3. 路由组件没有办法像一般组件那样通过标签属性向组件传递数据
4. 根据接受到id去查找相关的数据 最后展现

## /home/message/:id id既是占位符也是标识符

## 获取路由传递的参数

1. to= /home/message/${id} ===>path= /home/message/:id  ===>props.match.params.id
2. to= /home/message/?id=${id} ===>path= /home/message 


##Vue中获取路由传递的参数

1. to= /home/detail/${index}  ===> path=/home/detail/:id ===>$route.params.id 获取到标识符
2. to=/home/detail/?id=${index} path =/home/detail ===>$route.query.id 获取到id标识符


## 路由连接与非路由连接

1. 路由连接不会发送请求 Link NavLink
2. a标签就是非路由连接 连接会发生跳转 导致页面刷新
 

## vue中的路由显示组件

1. vue中的路由显示组件 <router-view />
2. React中的路由显示组件 <route/>


## React的DOM事件回调函数 onClick 对应的的是一个回调函数

1. onClick={this.handleClick} 这样不可以传递参数
2. onCLick={ ()=>{this.handleClick(data)} } 这样可传递参数


## 路由跳转的两种方式

1. 导航连接 
2. 编程导航 

## 导航连接 

1. Link to=""
2. NavLink to=""

## 编程导航 事件触发

1. props.history.push()
2. props.history.replace()

## 编程式历史记录 回退 前进 事件触发 有历史记录才能前进和后退

1. this.props.history.goBack()
2. this.props.history.goForward()

## 路由器标签

1. BrowserRouter
2. HashRouter


## 路由切换标签

1. NavLink 激活之后会有一个类 activeClass
2. Link 没有激活类
3. Redirect 默认切换


## 路由显示标签

1. Route 单个路由显示
2. Switch 可以包含多个Route路由显示


## 路由属性 props 当使用上路由器之后组件都拥有一个props对象

1. props.match.params 获取路由传递的参数
2. props.location
3. props.history


## props.history

1. props.history.push(path)    编程式导航 会往历史记录栈中添加记录
2. props.history.replace(path) 编程式导航 会替换史记记录
3. props.history.goBack()
4. props.history.goForward()


## React-ui

1. material-ui(国外)
2. ant-design (国内蚂蚁金服)
3. https://ant.design/index-cn pc端
4. https://mobile.ant.design/index-cn 移动端


## 解决300ms秒

	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
	  <script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
	  <script>
	    if ('addEventListener' in document) {
	      document.addEventListener('DOMContentLoaded', function() {
	        FastClick.attach(document.body);
	      }, false);
	    }
	    if(!window.Promise) {
	      document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
	    }
	  </script>