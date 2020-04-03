import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import Layout from './components/Layout'
import store from './store'

import MainPage from './modules/main'
import SecondPage from './modules/second'
import ThirdPage from './modules/third'

const Routes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route path='/second' component={SecondPage} />
            <Route path='/third' component={ThirdPage} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>)
}

export default Routes
