/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

import React, { Component } from 'react';

import './hello-world.scss';

export class HelloWorld extends Component<{ name: string }, {}> {

  public render(): JSX.Element {

    return (
      <div className="hello-world">Hello {this.props.name}!</div>
    );

  }

}
