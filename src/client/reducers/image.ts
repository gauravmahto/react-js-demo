/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

import { ImageVisibility, ImageStore, ImageStoreAction, IImageStoreAction } from 'stores';

const defaultState: ImageStore = {
  visibility: ImageVisibility.hide,
  imageSrc: []
};

export function updateImageData(state: ImageStore = defaultState, action: IImageStoreAction): ImageStore {

  let updatedState: ImageStore;

  switch (action.type) {

    case ImageStoreAction.clear:
      updatedState = {
        visibility: ImageVisibility.hide,
        imageSrc: []
      };
      break;

    case ImageStoreAction.fileChange:
      updatedState = {
        visibility: ImageVisibility.show,
        imageSrc: action.imageSrc
      };
      break;

    default:
      updatedState = state;
      break;

  }

  return updatedState;

}
