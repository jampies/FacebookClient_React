import React from 'react';
import facebookApi from '../../services/facebookApi/facebookApi';
import { Redirect } from 'react-router-dom';
import FacebookStyleButton from '../FacebookStyleButton/FacebookStyleButton';

export class FacebookLogin extends React.Component {
  constructor () {
    super();

    this.handleClickLogin = this.handleClickLogin.bind(this);

    this.state = {
      isLoggedIn: false
    };
  }

  componentDidMount () {
    facebookApi.isLoggedIn().then((status) => {
      if (status) {
        this.setState({
          isLoggedIn: true
        });
      }
    });
  }

  handleClickLogin () {
    facebookApi.login().then(() => {
      this.setState({
        isLoggedIn: true
      });
    });
  }

  render () {
    if (this.state.isLoggedIn) return <Redirect to='/feed' />;

    return (
      <div>
        <FacebookStyleButton onClick={this.handleClickLogin}>Login with Facebook</FacebookStyleButton>
      </div>
    );
  }
}

export default FacebookLogin;
