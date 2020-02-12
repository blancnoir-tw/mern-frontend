import React, { FC } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import GlobalStyle from './GlobalStyle'
import Users from './user/pages/Users'
import NewPlace from './places/pages/NewPlace'

const App: FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App
