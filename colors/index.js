const { getGradients, getBrokenGradients } = require('./gradient');
const { COLORS, QUICK_DURATION, QUICK_INTERVAL, SLOW_DURATION, SLOW_INTERVAL } = require('./colors');

const TRANSITIONS = [
  getGradients(COLORS.dawn.colors, COLORS.sunrise.colors, COLORS.sunrise.duration, COLORS.sunrise.frameInterval),
  getGradients(COLORS.sunrise.colors, COLORS.morning.colors, COLORS.morning.duration, COLORS.morning.frameInterval),
  getGradients(COLORS.morning.colors, COLORS.midday.colors, COLORS.midday.duration, COLORS.midday.frameInterval),
  getGradients(COLORS.midday.colors, COLORS.afternoon.colors, COLORS.afternoon.duration, COLORS.afternoon.frameInterval),
  getGradients(COLORS.afternoon.colors, COLORS.sunset.colors, COLORS.sunset.duration, COLORS.sunset.frameInterval),
  getGradients(COLORS.sunset.colors, COLORS.night.colors, COLORS.night.duration, COLORS.night.frameInterval),
  getGradients(COLORS.night.colors, COLORS.dawn.colors, COLORS.dawn.duration, COLORS.dawn.frameInterval),
];

const BROKEN_TRANSITIONS = [
  getBrokenGradients(COLORS.dawn.colors, COLORS.sunrise.colors, COLORS.sunrise.duration, COLORS.sunrise.frameInterval),
  getBrokenGradients(COLORS.sunrise.colors, COLORS.morning.colors, COLORS.morning.duration, COLORS.morning.frameInterval),
  getBrokenGradients(COLORS.morning.colors, COLORS.midday.colors, COLORS.midday.duration, COLORS.midday.frameInterval),
  getBrokenGradients(COLORS.midday.colors, COLORS.afternoon.colors, COLORS.afternoon.duration, COLORS.afternoon.frameInterval),
  getBrokenGradients(COLORS.afternoon.colors, COLORS.sunset.colors, COLORS.sunset.duration, COLORS.sunset.frameInterval),
  getBrokenGradients(COLORS.sunset.colors, COLORS.night.colors, COLORS.night.duration, COLORS.night.frameInterval),
  getBrokenGradients(COLORS.night.colors, COLORS.dawn.colors, COLORS.dawn.duration, COLORS.dawn.frameInterval),
];

const getGradient = (theme) => {
  return `linear-gradient(-180deg, ${theme[0]} 0%, ${theme[1]} 22%, ${theme[2]} 58%, ${theme[3]} 100%)`;
};

const setGradient = (el, transition) => {
  el.style.backgroundImage = getGradient(transition);
};

const startTransition = (el, indice, speed = 'quick', C = TRANSITIONS) => {
  const transitions = C[indice];
  let i = 0;
  let x;
  x = setInterval(() => {
    if (i >= transitions.length) {
      clearInterval(x);
      return;
    }
    setGradient(el, transitions[i]);
    i += 1;
  }, speed === 'quick' ? QUICK_INTERVAL : SLOW_INTERVAL);
};

const bindClick = (btnId, divId, i) => {
  const btn = document.getElementById(btnId);
  const div = document.getElementById(divId);
  const btnBroken = document.getElementById(btnId + '-broken');
  const divBroken = document.getElementById(divId + '-broken');
  btn.addEventListener('click', () => {
    startTransition(div, i);
  });
  btnBroken.addEventListener('click', () => {
    startTransition(divBroken, i, 'quick', BROKEN_TRANSITIONS);
  });
};

bindClick('color-start-transition-1', 'div-1', 0);
bindClick('color-start-transition-2', 'div-2', 1);
bindClick('color-start-transition-3', 'div-3', 2);
bindClick('color-start-transition-4', 'div-4', 3);
bindClick('color-start-transition-5', 'div-5', 4);
bindClick('color-start-transition-6', 'div-6', 5);
bindClick('color-start-transition-7', 'div-7', 6);