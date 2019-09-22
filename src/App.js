import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import FeedPage from './pages/FeedPage/FeedPage';
import authService from './services/authService/authService';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest} render={(props) => {
      if (!authService.isAuthenticated()) return <Redirect to='/login' />;
      return <Component {...props} />;
    }}
  />
);

class App extends React.Component {
  constructor () {
    super();
    this.state = {};
  }

  render () {
    return (
      <Router>
        <Switch>
          <Route path='/login' component={LoginPage} />
          <PrivateRoute path='/feed' component={FeedPage} />
          <Redirect to='/feed' />
        </Switch>
      </Router>
    );
  }
}

export default App;
