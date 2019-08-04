/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

import { hot } from 'react-hot-loader';
import React, { Component } from 'react';

import { HelloWorld } from 'components/index';
import { ImageUploader } from 'components/index';

import './app.scss';

class App extends Component {

  public render(): JSX.Element {

    return (
      <div className="app">
        <HelloWorld name="Gaurav"></HelloWorld>

        <br />
        <span>Upload image(s)</span>
        <ImageUploader multiple={true} accept="image/png, image/jpeg"></ImageUploader>

      </div>
    );

  }

}

export default hot(module)(App);
