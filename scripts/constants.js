/*
 * @Author: your name
 * @Date: 2021-03-31 16:54:14
 * @LastEditTime: 2021-03-31 16:54:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wlh_test\scripts\constant.js
 */
const path = require('path')

const PROJECT_PATH = path.resolve(__dirname, '../')
const PROJECT_NAME = path.parse(PROJECT_PATH).name

module.exports = {
  PROJECT_PATH,
  PROJECT_NAME
}
