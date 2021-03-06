import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Login from './components/login'
import Dashboard from './components/dashboard'


function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/feed" component={Dashboard} />
    </Router>
  )
}

export default App
