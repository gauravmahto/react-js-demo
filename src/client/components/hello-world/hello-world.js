/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

import React, { Component } from 'react';

import './hello-world.css';

export class HelloWorld extends Component {

  render() {

    return (
      <div className="hello-world">Hello {this.props.name}!</div>
    );

  }

}
