class ThemeColorScheme {
  constructor(colors, duration, frameInterval) {
    this.colors = colors;
    this.duration = duration;
    this.frameInterval = frameInterval;
  }
}

const QUICK_DURATION = 2000;
const QUICK_INTERVAL = 42;
const SLOW_DURATION = 10000;
const SLOW_INTERVAL = 100;

const COLORS = {
  dawn: new ThemeColorScheme(
    ['#1D092E', '#38154C', '#6C3272', '#E898A0'],
    SLOW_DURATION,
    SLOW_INTERVAL
  ),
  sunrise: new ThemeColorScheme(
    ['#0F3B6E', '#164D7F', '#B76B4F', '#EF984F'],
    SLOW_DURATION,
    SLOW_INTERVAL
  ),
  morning: new ThemeColorScheme(
    ['#85A9C4', '#C5C7C6', '#DFD2C0', '#F1B87C'],
    SLOW_DURATION,
    SLOW_INTERVAL
  ),
  midday: new ThemeColorScheme(
    ['#4372AA', '#81AADE', '#A3C4EC', '#BAD7F0'],
    QUICK_DURATION,
    QUICK_INTERVAL
  ),
  afternoon: new ThemeColorScheme(
    ['#276AAE', '#428CCA', '#68A9DF', '#8ACBF2'],
    QUICK_DURATION,
    QUICK_INTERVAL
  ),
  sunset: new ThemeColorScheme(
    ['#0F3B6E', '#164D7F', '#B76B4F', '#EF984F'],
    QUICK_DURATION,
    QUICK_INTERVAL
  ),
  night: new ThemeColorScheme(
    ['#213655', '#385679', '#4A7496', '#7272A0'],
    QUICK_DURATION,
    QUICK_INTERVAL
  )
};

exports.COLORS = COLORS;
exports.QUICK_DURATION = QUICK_DURATION;
exports.QUICK_INTERVAL = QUICK_INTERVAL;
exports.SLOW_DURATION = SLOW_DURATION;
exports.SLOW_INTERVAL = SLOW_INTERVAL;
