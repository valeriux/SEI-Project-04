import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import 'bulma'

import Home from './components/Home'
import ProductsIndex from './components/ProductsIndex'

class App extends React.Component {
  render() {
    return (
      <Router>
        <main>

          <Switch>
            <Route path="/products" component={ProductsIndex}/>
            <Route path="/" component={Home}/>
          </Switch>

        </main>
      </Router>

    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
