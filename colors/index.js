const { getGradients } = require('./gradient');
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

const getGradient = (theme) => {
  return `linear-gradient(-180deg, ${theme[0]} 0%, ${theme[1]} 22%, ${theme[2]} 58%, ${theme[3]} 100%)`;
};

const setGradient = (el, transition) => {
  el.style.backgroundImage = getGradient(transition);
};

const startTransition = (el, indice, speed = 'quick') => {
  const transitions = TRANSITIONS[indice];
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

const bindClick = (btn, div, i) => {
  btn.addEventListener('click', () => {
    startTransition(div, i);
  });
};

bindClick(document.getElementById('color-start-transition-1'), document.getElementById('div-1'), 0);
bindClick(document.getElementById('color-start-transition-2'), document.getElementById('div-2'), 1);
bindClick(document.getElementById('color-start-transition-3'), document.getElementById('div-3'), 2);
bindClick(document.getElementById('color-start-transition-4'), document.getElementById('div-4'), 3);
bindClick(document.getElementById('color-start-transition-5'), document.getElementById('div-5'), 4);
bindClick(document.getElementById('color-start-transition-6'), document.getElementById('div-6'), 5);
bindClick(document.getElementById('color-start-transition-7'), document.getElementById('div-7'), 6);