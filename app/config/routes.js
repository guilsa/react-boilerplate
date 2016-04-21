import React from 'react'
import { Router, hasHistory } from 'react-router'
import { MainContainer } from '../containers'

const routes = (
  <Router history={hasHistory}>
      <Router path='/' component={MainContainer} />
  </Router>
)

export default routes
