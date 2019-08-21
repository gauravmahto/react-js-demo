/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import './hello-world.scss';

export interface IHelloWorldProps {

  name: string;

}

export class HelloWorld extends Component<RouteComponentProps<IHelloWorldProps>> {

  public render(): JSX.Element {

    return (
      <div className="hello-world">Hello {this.props.match.params.name}!</div>
    );

  }

}
