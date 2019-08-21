/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

import React from 'react';

interface IConditionalDisplayProps {

  isVisible: boolean;
  children?: JSX.Element;

}

export function ConditionalDisplay(props: IConditionalDisplayProps): JSX.Element {

  return (
    <div className="conditional-display">
      {props.isVisible ? props.children : null}
    </div>
  );

}
