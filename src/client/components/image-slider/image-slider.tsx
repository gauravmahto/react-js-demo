/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

import React, { Component } from 'react';

import './image-slider.scss';

interface IImageSliderParams {

  files: FileList;

}

interface IImageSliderState {

  imageSrc: string[];

}

export class ImageSlider extends Component<IImageSliderParams, IImageSliderState> {

  public constructor(public props: IImageSliderParams) {

    super(props);

    this.state = {
      imageSrc: []
    };

  }

  public async componentDidMount(): Promise<void> {

    const imageSrc = await this.readFiles(Array.from(this.props.files));

    this.setState({
      imageSrc
    });

  }

  public render(): JSX.Element {

    if (this.state.imageSrc.length > 0) {

      return (
        <div className="image-slider">
          {...this.getFileDivs()}
        </div>
      );

    }

    return (
      <div className="image-slider loading"></div>
    );

  }

  private getFileDivs(): JSX.Element[] {

    return this.state.imageSrc.map((src, index) => {

      return (
        <img key={index} src={src}></img>
      );

    });

  }

  private async readFiles(files: File[]): Promise<string[]> {

    const deferredPromise: Array<Promise<string>> = [];

    for (const file of files) {

      deferredPromise.push(new Promise((resolve) => {

        const fileReader = new FileReader();
        fileReader.onload = (event) => {

          if (null !== event.target) {

            return resolve((event.target as FileReader).result as string);

          }

        };

        fileReader.readAsDataURL(file);

      }));

    }

    return Promise.all(deferredPromise);

  }

}
