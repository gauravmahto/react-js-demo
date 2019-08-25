/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

import { NextFunction } from 'connect';
import { Store } from 'redux';

import { IImage, ImageVisibility, ImageStore, IImageStoreAction, ImageStoreAction } from './types';

export function clearFiles(): IImage {

  return {
    imageSrc: []
  };

}

export async function readFiles(files: File[]): Promise<IImage> {

  const deferredPromise: Array<Promise<string>> = [];

  let imageSrc: string[];

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

  try {

    imageSrc = await Promise.all(deferredPromise);

  } catch {

    imageSrc = [];

  }

  return {
    imageSrc
  };

}

// Action creators.

export async function showImages(files: File[]): Promise<ImageStore> {

  return {
    visibility: ImageVisibility.show,
    imageSrc: (await readFiles(files)).imageSrc
  };

}

export function hideImages(): ImageStore {

  return {
    visibility: ImageVisibility.hide,
    imageSrc: clearFiles().imageSrc
  };

}

// Middlewares.

export const parseFilesMiddleware = (store: Store) => (next: NextFunction) => async (action: IImageStoreAction) => {

  if ((ImageStoreAction.fileChange === action.type) &&
    null !== action.files) {

    store.dispatch({
      type: action.type,
      files: null,
      ...await readFiles(action.files)
    });

  } else {

    next(action);

  }

};
