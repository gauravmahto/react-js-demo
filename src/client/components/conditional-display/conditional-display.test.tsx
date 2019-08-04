/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { ConditionalDisplay } from './conditional-display';

let conditionalDisplay: ShallowWrapper<undefined, undefined>;

describe('ConditionalDisplay component', () => {

  beforeEach(() => {

    conditionalDisplay = shallow(<ConditionalDisplay isVisible={false} />);

  });

  it('should render without error', () => {

    expect(conditionalDisplay.length).toBe(1);

  });

});
