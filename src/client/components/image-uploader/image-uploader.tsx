/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

import React, { ChangeEvent, Component, createRef, RefObject } from 'react';

import { ImageSlider } from '../index';

interface IImageUploaderOptions {

  multiple: boolean;
  accept: string;

}

interface IImageUploaderState {

  renderImageSlider: boolean;

}

export class ImageUploader extends Component<IImageUploaderOptions, IImageUploaderState> {

  public state = {
    renderImageSlider: false
  };

  private imageSliderElem: RefObject<ImageSlider>;

  public constructor(public props: IImageUploaderOptions) {

    super(props);

    this.imageSliderElem = createRef();

  }

  public render(): JSX.Element {

    return (
      <div className="image-uploader">

        <input type="file" {...this.props} onChange={(event) => this.onChangeHandler(event)} />

        <ImageSlider ref={this.imageSliderElem} ></ImageSlider>

      </div>
    );

  }

  private async onChangeHandler(event: ChangeEvent<HTMLInputElement>): Promise<void> {

    if ((null !== this.imageSliderElem.current) &&
      (null !== event.target.files)) {

      await this.imageSliderElem.current.parseFiles(Array.from(event.target.files));

      this.setState({
        renderImageSlider: true
      });

    }

  }

}
