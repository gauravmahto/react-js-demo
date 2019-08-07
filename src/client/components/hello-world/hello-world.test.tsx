/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

import React from 'react';
import { match } from 'react-router';
import { createMemoryHistory, createLocation } from 'history';
import { shallow, HTMLAttributes, ShallowWrapper } from 'enzyme';

import { HelloWorld } from './hello-world';

let helloWorld: ShallowWrapper<undefined, undefined>;

describe('HelloWorld component', () => {

  const history = createMemoryHistory();
  const path = '/hello-world/:name';
  const nameProp = 'testName';
  const match: match<{ name: string }> = {
    isExact: false,
    path,
    url: path.replace(':name', nameProp),
    params: { name: nameProp }
  };
  const location = createLocation(match.url);

  beforeEach(() => {

    helloWorld = shallow(<HelloWorld history={history} location={location} match={match} />);

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
