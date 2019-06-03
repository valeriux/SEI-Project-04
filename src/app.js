import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import 'bulma'
import './style.scss'


import Navbar from './components/Navbar'
import FlashMessages from './components/FlashMessages'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'


import ProductNew from './components/ProductNew'
import ProductEdit from './components/ProductEdit'
import ProductShow from './components/ProductShow'
import ProductsIndex from './components/ProductsIndex'


class App extends React.Component {
  render() {
    return (
      <Router>
        <main>
          <Navbar/>
          <FlashMessages />
          <Switch>
            <Route path="/products/:id/Edit" component={ProductEdit}/>
            <Route path="/products/new" component={ProductNew}/>
            <Route path="/products/:id" component={ProductShow}/>
            <Route path="/products" component={ProductsIndex}/>

            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
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
