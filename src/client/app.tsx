/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

import { hot } from 'react-hot-loader';
import React, { Component } from 'react';
import { Link, RouteComponentProps, Route } from 'react-router-dom';

import { HelloWorld } from 'components';
import { ImageUploader } from 'components';

import './app.scss';

class App extends Component<RouteComponentProps> {

  public render(): JSX.Element {

    return (
      <div className="app">

        <Link to='/hello-world/Gaurav'>Hello World example</Link>
        <br />
        <Link to='/image-uploader'>Image Uploader example</Link>

        <Route path='/hello-world/:name'
          render={(props) => <HelloWorld {...props} />}>
        </Route>

        <Route path='/image-uploader'
          render={() => <ImageUploader multiple={true} accept="image/png, image/jpeg" />}>
        </Route>

      </div>
    );

  }

}

export default hot(module)(App);
