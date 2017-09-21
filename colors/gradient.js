/* eslint-disable no-underscore-dangle */
const color = require('color');

const getBrokenGradient = (color1, color2, ratio) => {
  const start = color(color1);
  const end = color(color2);

  if (!ratio || ratio <= 0) return start.rgb().string();
  if (ratio >= 1) return end.rgb().string();

  const base = {
    h: start.hue(),
    s: start.saturationl(),
    l: start.lightness(),
    a: start.alpha()
  };

  const delta = {
    h: (base.h - end.hue()),
    s: (base.s - end.saturationl()),
    l: (base.l - end.lightness()),
    a: (base.a - end.alpha())
  };

  let h = base.h - (delta.h * ratio);
  let s = base.s - (delta.s * ratio);
  let l = base.l - (delta.l * ratio);
  let a = base.a - (delta.a * ratio);

  // Round out values
  if (h > 360) {
    h -= 360;
  } else if (h < 0) {
    h += 360;
  }
  if (s > 100) {
    s = 100;
  } else if (s < 0) {
    s = 0;
  }
  if (l > 100) {
    l = 100;
  } else if (l < 0) {
    l = 0;
  }
  if (a > 1) {
    a = 1;
  } else if (a < 0) {
    a = 0;
  }

  // Build new color object
  const c = color()
    .hue(h)
    .saturationl(s)
    .lightness(l)
    .alpha(a);

  return c.rgb().string();
};

const getGradient = (color1, color2, ratio) => {
  const start = color(color1);
  const end = color(color2);

  if (!ratio || ratio <= 0) return start.rgb().string();
  if (ratio >= 1) return end.rgb().string();

  return start.mix(end, ratio).rgb().string();
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

const getBrokenGradients = (colors1, colors2, duration, frameInterval) => {
  if (colors1.length !== colors2.length) {
    throw new Error(`colors1 and colors2 should have the same length (${colors1.toString()}, ${colors2.toString()})`);
  }
  const numberOfSteps = Math.floor(duration / frameInterval);

  return Array(numberOfSteps).fill().map((_, index) => {
    const ratio = index / numberOfSteps;
    return colors1.map((color1, indexbis) => {
      const color2 = colors2[indexbis];
      return getBrokenGradient(color1, color2, ratio);
    });
  });
};

exports.getBrokenGradient = getBrokenGradient;

exports.getGradient = getGradient;

exports.getGradients = getGradients;

exports.getBrokenGradients = getBrokenGradients;
