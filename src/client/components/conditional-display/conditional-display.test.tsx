/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

import React from 'react';
import { shallow, ShallowWrapper, HTMLAttributes } from 'enzyme';

import { ConditionalDisplay } from './conditional-display';

let conditionalDisplay: ShallowWrapper<undefined, undefined>;

describe('ConditionalDisplay component', () => {

  beforeEach(() => {

    conditionalDisplay = shallow(<ConditionalDisplay isVisible={false} />);

  });

  it('should render without error', () => {

    expect(conditionalDisplay.length).toBe(1);

  });

  it('should render the container HTMLElement', () => {

    const pNodes: ShallowWrapper<HTMLAttributes> = conditionalDisplay.find('.conditional-display');

    expect(pNodes.length).toBe(1);

  });

});
