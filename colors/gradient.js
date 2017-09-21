/* eslint-disable no-underscore-dangle */
const color = require('color');

const getGradient = (color1, color2, ratio) => {
  const start = color(color1);
  const end = color(color2);

  if (!ratio || ratio <= 0) return start.rgb().string();
  if (ratio >= 1) return end.rgb().string();

  const c = start.mix(end, ratio);

  return c.rgb().string();
};

const getGradients = (colors1, colors2, duration, frameInterval) => {
  if (colors1.length !== colors2.length) {
    throw new Error(`colors1 and colors2 should have the same length (${colors1.toString()}, ${colors2.toString()})`);
  }
  const numberOfSteps = Math.floor(duration / frameInterval);

  return Array(numberOfSteps).fill().map((_, index) => {
    const ratio = index / numberOfSteps;
    return colors1.map((color1, indexbis) => {
      const color2 = colors2[indexbis];
      return getGradient(color1, color2, ratio);
    });
  });
};

exports.default = getGradient;

exports.getGradients = getGradients;
