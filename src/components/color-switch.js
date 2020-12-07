import { colors } from '../data/data.js';
import { refs } from '../refs/refs.js';
console.log(colors.length);
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
export const colorSwitcher = {
  isActive: false,
  start() {
    this.isActive = true;
    if (this.isActive) {
      refs.buttonStart.disabled = true;
    }
    this.switcher = setInterval(() => {
      refs.body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
  },
  stop() {
    clearInterval(this.switcher);
    this.isActive = false;
    refs.buttonStart.disabled = false;
  },
};
