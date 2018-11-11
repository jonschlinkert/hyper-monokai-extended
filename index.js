'use strict';

const colors = {
  black: '#222222',
  red: '#ec3533',
  green: '#a2e12e',
  yellow: '#fd9620',
  blue: '#be84ff',
  magenta: '#ff6ac1',
  cyan: '#65d9ef',
  white: '#ffffff',
  lightBlack: '#49483E',
  lightRed: '#F92672',
  lightGreen: '#A6E22E',
  lightYellow: '#d0d172',
  lightBlue: '#AE81FF',
  lightMagenta: '#ff6ac1',
  lightCyan: '#38CCD1',
  lightWhite: '#ffffff',
  colorCubes: '#ffffff',
  grayscale: '#F8F8F0'
};

const backgroundColor = colors.black;
const foregroundColor = colors.grayscale;
const tabActiveBackground = '#424242';

exports.decorateConfig = config => Object.assign({}, config, {
  backgroundColor,
  foregroundColor,
  borderColor: '#222430',
  cursorColor: '#97979b',
  colors: colors
});
