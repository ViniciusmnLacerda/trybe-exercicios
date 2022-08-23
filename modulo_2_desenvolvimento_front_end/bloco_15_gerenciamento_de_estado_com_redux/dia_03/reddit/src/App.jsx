import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CostumersList from './pages/CostumersList';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          exact
          path="/login"
          component={Login}
        />
        <Route
          exact
          path="/costumers-list"
          component={CostumersList}
        />
        <Route
          exact
          path="/register"
          component={Register}
        />
      </Switch>
    );
  }
}

export default App;
