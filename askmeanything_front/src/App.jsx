import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './components/Landing';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

import './css/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null,
    };
    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
  }

  handleSignOut() {
    this.setState({
      loggedIn: false,
      username: null,
    });
  }

  handleLogIn() {
    this.setState({
      loggedIn: true,
      username: 'Leonidas',
    });
  }

  render() {
    const { loggedIn, username } = this.state;
    return (
      <div>
        <Header
          loggedIn={loggedIn}
          username={username}
          handleSignOut={this.handleSignOut}
        />
        {/* <Landing /> */}
        <Switch>
          <Route exact path="/"><Landing /></Route>
          <Route path="/login"><LogIn handleLogIn={this.handleLogIn} /></Route>
          <Route path="/signup"><SignUp /></Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
