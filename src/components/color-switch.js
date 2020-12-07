import { colors } from '../data/data.js';
import { refs } from '../refs/refs.js';
console.log(colors.length);
export const colorSwitcher = {
  isActive: false,
  start() {
    this.isActive = true;
    if (this.isActive) {
      refs.buttonStart.disabled = true;
    }
    const randomIntegerFromInterval = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    this.switcher = setInterval(() => {
      const randomColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)];
      refs.body.style.backgroundColor = randomColor;
      console.log(randomColor);
    }, 1000);
  },
  stop() {
    clearInterval(this.switcher);
    this.isActive = false;
    refs.buttonStart.disabled = false;
  },
};
