import React from 'react'
import Layout from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginScreen from './components/loginPage/loginScreen'
import './App.css'

function App () {
  return (
    <Router>
      <Layout className='App'>
        <Switch>
          <Route path='/' exact component={LoginScreen} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
