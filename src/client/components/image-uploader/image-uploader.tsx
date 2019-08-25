/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

import React, { ChangeEvent, Component, createRef, RefObject, Dispatch } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { ImageStoreAction } from 'stores';

import { ImageSliderConnectedComponent } from '../index';
import './image-uploader.scss';

interface IImageUploaderProps {

  multiple: boolean;
  accept: string;

}

interface IDispatchProps {

  onFileChange: (files: File[] | null) => void;

}

interface IDispatch {

  type: ImageStoreAction.fileChange;
  [ other: string ]: any;

}

type Props = IImageUploaderProps & IDispatchProps;

export class ImageUploader extends Component<Props> {

  private mFileInputElem: RefObject<HTMLInputElement>;

  public constructor(public props: Props) {

    super(props);

    this.mFileInputElem = createRef();

  }

  public render(): JSX.Element {

    return (
      <div className="image-uploader">

        <span>Upload image(s)</span>
        <br />

        <Button onClick={() => this.mFileInputElem.current!.click()}>Import images(s)</Button>

        <input hidden id="import-file" type="file" {...this.props} ref={this.mFileInputElem}
          onChange={(event) => this.props.onFileChange(this.onFileChange(event))} />

        <ImageSliderConnectedComponent></ImageSliderConnectedComponent>

      </div>
    );

  }

  private onFileChange(event: ChangeEvent<HTMLInputElement>): File[] | null {

    if (null !== event.target.files) {

      return Array.from(event.target.files);

    }

    return null;

  }

}

function mapDispatchToProps(dispatch: Dispatch<IDispatch>): IDispatchProps {

  return {
    onFileChange: (files: File[] | null) => dispatch({ type: ImageStoreAction.fileChange, files })
  };

}

export const ImageUploaderConnectedComponent = connect(null, mapDispatchToProps)(ImageUploader);
