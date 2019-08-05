/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

import React, { Component } from 'react';

import { ConditionalDisplay } from '../index';

import './image-slider.scss';

interface IImageSliderState {

  imageSrc: string[];

}

export class ImageSlider extends Component<{}, IImageSliderState> {

  public state = {
    imageSrc: []
  };

  public async parseFiles(files: File[]): Promise<void> {

    const imageSrc = await this.readFiles(files);

    this.setState({
      imageSrc
    });

  }

  public render(): JSX.Element {

    return (
      <div className="image-slider">
        <ConditionalDisplay isVisible={0 !== this.state.imageSrc.length}>
          <div className="image-container">
            {...this.getFileDivs()}
          </div>
        </ConditionalDisplay>
      </div>
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
