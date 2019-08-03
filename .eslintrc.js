module.exports = {
  env: {
    es6: true
  },
  extends: [
    'plugin:react/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'semi': 0,
    'array-bracket-spacing': 0,
    'padded-blocks': [ 'error', 'always' ],
    'space-before-function-paren': [ 'error', 'never' ]
  }
}
