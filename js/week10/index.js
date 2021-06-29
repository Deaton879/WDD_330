import QuakesController from '../week10/QuakesController.js';
import buildNavigation from '../week10/routes.js';

const navElement = document.getElementById('mainNav');
buildNavigation(navElement);

// const myQuakesController = new QuakesController('#quakeList');
// myQuakesController.getQuakesByRadius();