/* eslint-disable */
const postcssPresetEnv = require(`postcss-preset-env`)
const postcssCustomMedia = require('postcss-custom-media');
const postcssImport = require("postcss-import");
const stylelint = require("stylelint")

module.exports = () => ({
  plugins: [
    stylelint(),
    postcssImport(),
    postcssPresetEnv(),
    postcssCustomMedia({
        importFrom: './src/styles/00-breakpoints/breakpoints.css'
    })
  ],
})
