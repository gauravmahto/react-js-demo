/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './app';

export function AppRouter(): JSX.Element {

  return (
    <BrowserRouter>

      <Route path="/" component={App}></Route>

    </BrowserRouter>
  );

} 
