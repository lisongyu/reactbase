import React from 'react';

class ClassDemo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      defaultText: '我是默认的文字'
    }
  }

  changeText () {
    this.props.onPropChange('111111111111111')
  }

  render () {
    return (
      <div className="App">
         <p>{this.props.children}232</p>
        <button onClick={ this.changeText.bind(this) }>更改文本</button>
      </div>
    )
  }
}
export default ClassDemo;
