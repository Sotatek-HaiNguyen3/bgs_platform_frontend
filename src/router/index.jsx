import React from 'react'
import {lazy} from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { history } from 'store/root-store'
import { AuthRoute } from './PrivateRouter'

import DefaultLayout from '../layout/DefaultLayout'
import MainLayout from 'layout/MainLayout'

import HomePage from 'containers/Home'
import Register from 'containers/Register'
import Login from 'containers/Login'
import NotFound from 'containers/NotFound'

const Component = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" exact>
          <DefaultLayout components={<Login />}/>
        </Route>

        <Route path="/register" exact>
          <DefaultLayout components={<Register />}/>
        </Route>

        <AuthRoute path="/" exact>
          <MainLayout components={<HomePage />} />
        </AuthRoute>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}

export default Component