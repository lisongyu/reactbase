import React, { Component } from 'react';
class FirstCom extends Component {
  constructor (props) {
    super(props)
    this.addCount=this.addCount.bind(this)
   
   
    this.state = {
      title:props.title,
      quantity:0
    }
  }
  addCount(){
    this.setState((prevState, props) => {
      return {quantity: prevState.quantity + 1};
    });

  }
  // render函数
  render () {
    return (
      <div className="App">
        <p onClick={this.addCount}>我是Class组件</p>
        <div>{this.state.title}</div>
        <div>{this.props.name}</div>
        <div>{this.state.quantity}</div>
      </div>
    )
  }
}

FirstCom.defaultProps = {
  name: '我是默认的名称'
  // ... 参数列表
}

export default FirstCom
