

//ReactDOM.render(
//	<div>
//	<buttom className='btn btn-default'>add</buttom>
//	<ul className='list-group'>
//		<li className='list-group-item'>小明<a className='right glyphicon glyphicon-edit' href=""></a><a className='right glyphicon glyphicon-remove' href=""></a></li>
//		<li className='list-group-item'>
//			<input className='item-edit'/><a className='glyphicon glyphicon-share' href="#"></a><a className='glyphicon glyphicon-remove' href=""></a>
//		</li>
//	</ul></div>,
//	document.getElementById('test')
//)
// class需要修改为className驼峰式的写法
// 组件最外层一定要有容器


//Item
const Item = React.createClass({
	render(){
		return <li className='list-group-item'>{this.props.value + this.props.children}
			<a className='right glyphicon glyphicon-edit' href=""></a>
			<a className='right glyphicon glyphicon-remove' href=""></a>
		</li>
	}
});

//ItemEditor
const ItemEditor = React.createClass({
	render(){
		return <li className='list-group-item'>
			<input className='item-edit' value={this.props.value}/>
			<a className='glyphicon glyphicon-share' href="#"></a>
			<a className='glyphicon glyphicon-remove' href=""></a>
		</li>
	}
});

//List
const List = React.createClass({
	
	getInitialState(){
		return {
			list:new Set(),
			editList:new Set() //单纯的数据
		}
	},
	
	add(){
		this.state.editList.add({value:''});//向editList中添加数据
		this.forceUpdate()//调用render强制刷新
	},
	
	render(){
		
		const ListDOM = []; //这个属于组件的显示部分
		const editListDOM = []; //这个属于组件的显示部分 conponent数组
		
		for(let item of this.state.list){
			ListDOM.push(<Item value={item.value} />)
		}
		
		for(let item of this.state.editList){
			editListDOM.push(<ItemEditor value={item.value} />)
		}
		
		return <div>
			<buttom onClick={this.add} className='btn btn-default'>add</buttom>
			<ul className='list-group'>
				{ListDOM}
				{editListDOM}
			</ul>
		</div>
	} // 绑定事件onClick={this.add}驼峰式写法
})

ReactDOM.render(
	<List />,
	document.getElementById('test')
)

//组件封装时要加{}，绑定根节点时不加
//组件封装通过创建相应的类
//props连接父组件与子组件的数据  或者 使用子元素
//props 父组件传给子组件的数据，只读
//defaultValue input标签的默认值 可更改 // value 值 不可更改

//getInitialState 是reactComponent 内部的一种方法
//返回state 可写的状态数据