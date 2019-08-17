/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

import React, { ChangeEvent, Component, createRef, RefObject } from 'react';
import { Button } from 'react-bootstrap';

import { ImageSlider } from '../index';

import './image-uploader.scss';

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
  private fileInputElem: RefObject<HTMLInputElement>;

  public constructor(public props: IImageUploaderOptions) {

    super(props);

    this.imageSliderElem = createRef();
    this.fileInputElem = createRef();

  }

  public render(): JSX.Element {

    return (
      <div className="image-uploader">

        <span>Upload image(s)</span>
        <br />
        <Button onClick={() => this.fileInputElem.current!.click()}>Import images(s)</Button>
        <input hidden id="import-file" type="file" {...this.props} ref={this.fileInputElem}
          onChange={(event) => this.onChangeHandler(event)} />

        <ImageSlider ref={this.imageSliderElem}></ImageSlider>

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
