import React, { Component } from 'react';
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '我是wangly19'
    }
  }

  updateText () {
    this.setState({
      text: '我是帅气的wangly19'
    })
  }

  render () {
    return (
      <div className="App">
        <p>我是一个动态的数据: {this.state.text}</p>
        {true && <p>2</p>}
        <button onClick={ this.updateText.bind(this) }>更换</button>
      </div>
    )
  }
}


export default App
