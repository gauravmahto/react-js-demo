/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

import { hot } from 'react-hot-loader';
import React, { Component } from 'react';

import { HelloWorld } from './components/hello-world/hello-world';

import './app.scss';

class App extends Component {

  public render(): JSX.Element {

    return (
      <div className="app">
        <HelloWorld name="Gaurav"></HelloWorld>
      </div>
    );

  }

}

export default hot(module)(App);
