/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

import React from 'react';

interface IConditionalDisplay {

  isVisible: boolean;
  children?: JSX.Element;

}

export function ConditionalDisplay(props: IConditionalDisplay): JSX.Element {

  return (
    <div className="conditional-display">
      {props.isVisible ? props.children : null}
    </div>
  );

}
