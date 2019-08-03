/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

import { hot } from 'react-hot-loader';
import React, { Component } from 'react';

import { HelloWorld } from './components/hello-world/hello-world';

import './app.css';

class App extends Component {

  render() {

    return (
      <div className="app">
        <HelloWorld time={Date.now()}></HelloWorld>
      </div>
    );

  }

}

export default hot(module)(App);
