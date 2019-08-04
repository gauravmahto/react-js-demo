/*!
  * Copyright 2019 - Author gauravm.git@gmail.com
  */

/* eslint-disable @typescript-eslint/no-var-requires */

const { join } = require('path');

const clientDir = join(__dirname, 'src', 'client');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: [ '<rootDir>/src/client' ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '((\\.|/)(test))\\.tsx?$',
  moduleFileExtensions: [ 'ts', 'tsx', 'js', 'jsx', 'json', 'node' ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(scss|css|less)$': 'identity-obj-proxy',
    components: join(clientDir, 'components')
  },
  snapshotSerializers: [ 'enzyme-to-json/serializer' ],
  setupFilesAfterEnv: [
    '<rootDir>/src/client/setup-enzyme.ts'
  ]
};
