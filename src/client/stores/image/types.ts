/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

export enum ImageVisibility {

  show = 'show',
  hide = 'hide'

}

export enum ImageStoreAction {

  clear = 'clear',
  fileChange = 'fileChange'

}

export interface IImageStoreAction {

  type: ImageStoreAction;
  files: File[] | null;
  imageSrc: string[];

}

export interface IImageState {

  visibility: ImageVisibility;

}
export interface IImage {

  imageSrc: string[];

}

export type ImageStore = IImage & IImageState;
