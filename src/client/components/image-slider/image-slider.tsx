/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

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

    this.setState({
      imageSrc: await this.readFiles(files)
    });

  }

  public render(): JSX.Element {

    return (
      <div className="image-slider">
        <ConditionalDisplay isVisible={0 !== this.state.imageSrc.length}>
          <div className="image-container">
            <Carousel>
              {...this.getFileDivs()}
            </Carousel>
          </div>
        </ConditionalDisplay>
      </div>
    );

  }

  private getFileDivs(): JSX.Element[] {

    return this.state.imageSrc.map((src, index) => {

      return (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={src}></img>
        </Carousel.Item>
      );

    });

  }

  private async readFiles(files: File[]): Promise<string[]> {

    const deferredPromise: Array<Promise<string>> = [];

    for (const file of files) {

      deferredPromise.push(new Promise((resolve, reject) => {

        const fileReader = new FileReader();
        fileReader.onload = (event) => {

          if (null !== event.target) {

            return resolve((event.target as FileReader).result as string);

          }

          return reject(new Error('Invalid file data.'));

        };

        fileReader.readAsDataURL(file);

      }));

    }

    return Promise.all(deferredPromise);

  }

}
