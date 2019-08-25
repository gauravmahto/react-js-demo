/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

import { createStore, applyMiddleware } from 'redux';

import { updateImageData } from 'reducers/image';
import { parseFilesMiddleware } from 'stores';

export default createStore(updateImageData, applyMiddleware(parseFilesMiddleware));
