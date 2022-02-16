import React, { memo } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import About from '@Components/Page/About'
import Form from '@Components/Page/Form'
import Home from '@Components/Page/Home'

import './style.css'

function App(): React.ReactElement {
  return (
    <Router>
      <main className="container">
        <nav className="side">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Auto Block Demo</Link>
            </li>
            <li>
              <Link to="/form">Conditional Block Demo</Link>
            </li>
          </ul>
        </nav>
        <div className="main">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/form">
              <Form />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </main>
    </Router>
  )
}

export default memo(App)
