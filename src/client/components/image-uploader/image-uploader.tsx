/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

import React, { ChangeEvent, Component } from 'react';

import { ConditionalDisplay, ImageSlider } from '../index';

interface IImageUploaderOptions {

  multiple: boolean;
  accept: string;

}

interface IImageUploaderState {

  files: FileList | null;

}

export class ImageUploader extends Component<IImageUploaderOptions, IImageUploaderState> {

  public constructor(public props: IImageUploaderOptions) {

    super(props);

    this.state = {
      files: null
    };

  }

  public render(): JSX.Element {

    return (
      <div className="image-uploader">

        <input type="file" {...this.props} onChange={(event) => this.onChangeHandler(event)} />

        <ConditionalDisplay isVisible={!!this.state.files && (0 !== this.state.files.length)}>
          <ImageSlider files={this.state.files as FileList}></ImageSlider>
        </ConditionalDisplay>

      </div>
    );

  }

  private onChangeHandler(event: ChangeEvent<HTMLInputElement>): void {

    if (null !== event.target.files) {

      for (let index = 0; index < event.target.files.length; ++index) {

        this.setState({
          files: event.target.files
        });

      }

    }

  }

}
