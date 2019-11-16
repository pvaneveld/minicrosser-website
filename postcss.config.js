/* eslint-disable */
const postcssPresetEnv = require(`postcss-preset-env`);
const postcssCustomMedia = require('postcss-custom-media');
const postcssImport = require('postcss-import');
const stylelint = require('stylelint');
const postcssNesting = require('postcss-nesting');

module.exports = () => ({
  plugins: [
    postcssImport({
      plugins: [postcssNesting(), postcssPresetEnv()]
    }),
    stylelint(),
    // postcssNesting(),
    postcssPresetEnv({
      stage: 3,
      features: {
        'nesting-rules': true,
      },
    }),
    postcssCustomMedia({
      importFrom: './src/styles/00-breakpoints/breakpoints.css',
    }),
  ],
});
