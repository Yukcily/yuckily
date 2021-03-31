/*
 * @Author: your name
 * @Date: 2021-03-31 16:28:34
 * @LastEditTime: 2021-03-31 16:38:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wlh_test\.eslintrc.js
 */
module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "rules": {
  },
  "extends": [
    // other configs ...
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
    'prettier/unicorn',
  ]
};
