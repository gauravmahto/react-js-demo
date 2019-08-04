/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

import React from 'react';
import { shallow, HTMLAttributes, ShallowWrapper } from 'enzyme';

import { ImageUploader } from './image-uploader';

let imageUploader: ShallowWrapper<undefined, undefined>;

describe('ImageUploader component', () => {

  beforeEach(() => {

    imageUploader = shallow(<ImageUploader multiple={true} accept="image/png, image/jpeg" />);

  });

  it('should render without error', () => {

    expect(imageUploader.length).toBe(1);

  });

  it('should render the input HTMLElement with the passed props', () => {

    const pNodes: ShallowWrapper<HTMLAttributes> = imageUploader.find('input');

    expect(pNodes.length).toBe(1);
    expect(pNodes.props()).toHaveProperty('accept');
    expect(pNodes.props()).toHaveProperty('multiple');

  });

});
