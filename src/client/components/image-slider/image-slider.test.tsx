/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

import React from 'react';
import { shallow, ShallowWrapper, HTMLAttributes } from 'enzyme';

import { ImageSlider } from './image-slider';

let imageSlider: ShallowWrapper<undefined, undefined>;

describe('ImageSlider component', () => {

  beforeEach(() => {

    imageSlider = shallow(<ImageSlider />);

  });

  it('should render without error', () => {

    expect(imageSlider.length).toBe(1);

  });

  it('should render the container HTMLElement', () => {

    const pNodes: ShallowWrapper<HTMLAttributes> = imageSlider.find('.image-slider');

    expect(pNodes.length).toBe(1);

  });

});
