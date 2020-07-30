

import React from 'react';
// histoty
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
// hash
// import { Link, Route, HashRouter as Router } from 'react-router-dom';

function Page1 () {
  return (
    <h1>我是Page1</h1>
  )
}

function Page2 () {
  return (
    <h1>我是Page2</h1>
  )
}

function Page3 () {
  return (
    <h1>我是Page3</h1>
  )
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div className="App">
        <Router>
          <ul>
            <li>
              <Link  to={{
            pathname: '/page1/10',
            search: '?roles=[10,20]',
            state: { name: 'wangly19' },
          }}>Page1</Link>
            </li>
            <li>
              <Link to="page2">Page2</Link>
            </li>
            <li>
              <Link to="page3">Page3</Link>
            </li>
          </ul>
          <Route exact path="/page1/:id"  component={ Page1 }></Route>
          <Route exact path="/page2" component={ Page2 }></Route>
          <Route exact path="/page3" component={ Page3 }></Route>
        </Router>
      </div>
    )
  }
}
export default App;
