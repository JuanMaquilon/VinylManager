import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Login from './components/auth/Login';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div>
            <Navigation />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Switch>
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
