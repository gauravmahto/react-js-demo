/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { ImageSlider } from './image-slider';

let imageSlider: ShallowWrapper<undefined, undefined>;

describe('ImageSlider component', () => {

  beforeEach(() => {

    /* eslint-disable @typescript-eslint/no-object-literal-type-assertion */
    imageSlider = shallow(<ImageSlider files={{} as FileList} />);

  });

  it('should render without error', () => {

    expect(imageSlider.length).toBe(1);

  });

});
