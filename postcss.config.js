/* eslint-disable */
const postcssPresetEnv = require(`postcss-preset-env`)
const postcssCustomMedia = require('postcss-custom-media');
const postcssImport = require("postcss-import");

module.exports = () => ({
  plugins: [
    postcssImport(),
    postcssPresetEnv(),
    postcssCustomMedia({
        importFrom: './src/styles/00-variables/variables.css'
    })
  ],
})
