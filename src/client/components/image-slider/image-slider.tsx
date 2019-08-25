/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { connect } from 'react-redux';

import { ImageStore, IImage, ImageVisibility } from 'stores';

import { ConditionalDisplay } from '../index';
import './image-slider.scss';

export class ImageSlider extends Component<ImageStore, IImage> {

  public state: IImage = {
    imageSrc: []
  };

  public componentWillReceiveProps(nextProps: ImageStore): void {

    this.setState({
      imageSrc: nextProps.imageSrc
    });

  }

  public render(): JSX.Element {

    return (
      <div className="image-slider">
        <ConditionalDisplay isVisible={ImageVisibility.show === this.props.visibility}>
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

}

function mapStateToProps(state: ImageStore): ImageStore {

  return {
    imageSrc: state.imageSrc,
    visibility: state.visibility
  };

}

export const ImageSliderConnectedComponent = connect(mapStateToProps)(ImageSlider);
