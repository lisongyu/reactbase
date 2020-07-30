import React, { Component } from 'react';
import ClassDemo from './child';
// 父组件
class Parent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      childMessage: '2222222222222222'
    }
  }

  onPropChange (newVal) {
    this.setState({
      childMessage: newVal
    })
  }

  render () {
    return (
      <div className="App">
        <p>插入的元素</p>
        {/* <p>{ this.state.childMessage }</p> */}
        <ClassDemo onPropChange={ this.onPropChange.bind(this) }></ClassDemo>
        {/* <FunctionDemo></FunctionDemo> */}
      </div>
    )
  }
}

export default Parent
