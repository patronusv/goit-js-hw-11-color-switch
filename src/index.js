import './styles.css';
import { refs } from './refs/refs.js';
import { colorSwitcher } from './components/color-switch.js';

refs.buttonStart.addEventListener(
  'click',
  colorSwitcher.start.bind(colorSwitcher),
);

refs.buttonStop.addEventListener(
  'click',
  colorSwitcher.stop.bind(colorSwitcher),
);
