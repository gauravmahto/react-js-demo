/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

// Must be imported before React for 'mount' to work.
import 'jsdom-global/register';

import React from 'react';
import { shallow, HTMLAttributes, ShallowWrapper, mount } from 'enzyme';

import { ImageUploader } from './image-uploader';

let imageUploader: ShallowWrapper<undefined, undefined>;

describe('ImageUploader component', () => {

  beforeEach(() => {

    imageUploader = shallow(<ImageUploader multiple={true} accept="image/png, image/jpeg" />);

  });

  it('should render without error', () => {

    expect(imageUploader.length).toBe(1);

  });

  it('should render the container HTMLElement', () => {

    const pNodes: ShallowWrapper<HTMLAttributes> = imageUploader.find('.image-uploader');

    expect(pNodes.length).toBe(1);

  });

  it('should render the input HTMLElement with the passed props', () => {

    const pNodes: ShallowWrapper<HTMLAttributes> = imageUploader.find('input');

    expect(pNodes.length).toBe(1);
    expect(pNodes.props()).toHaveProperty('accept');
    expect(pNodes.props()).toHaveProperty('multiple');

  });

  it('should not load the images initially', () => {

    const mountedImageUploader = mount(<ImageUploader multiple={true} accept="image/png, image/jpeg" />);

    const conditionalDisplayWrapper = mountedImageUploader.find('.conditional-display');
    const imgWrapper = mountedImageUploader.find('img');

    expect(conditionalDisplayWrapper.length).toBe(1);
    expect(imgWrapper.length).toBe(0);

  });

});
