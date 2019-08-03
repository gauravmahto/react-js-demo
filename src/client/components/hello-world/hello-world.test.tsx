/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

import React from 'react';
import { shallow, HTMLAttributes, ShallowWrapper } from 'enzyme';

import { HelloWorld } from './hello-world';

const nameProp = 'Gaurav';

let helloWorld: ShallowWrapper<undefined, undefined>;

describe('HelloWorld component', () => {

  beforeEach(() => {

    helloWorld = shallow(<HelloWorld name={nameProp} />);

  });

  it('should render without error', () => {

    expect(helloWorld.length).toBe(1);

  });

  it('should render the div with the passed props', () => {

    const pNodes: ShallowWrapper<HTMLAttributes, undefined> = helloWorld.find('div');

    expect(pNodes.length).toBe(1);
    expect(pNodes.text()).toContain(nameProp);

  });

});
