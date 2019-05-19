import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Page from './Page'

const App = () => (
  <Router>
    <Route path="/:id" component={Page} />
  </Router>
)

export default App
