module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': 0,
    'comma-dangle': 0,
    'class-methods-use-this': 0,
    'no-use-before-define': 0,
    'indent': "off",
    'no-trailing-spaces': 'off',
    'linebreak-style': 'off',
    'no-multiple-empty-lines': 'off'

  },
};
