import './assets/main.css';
import json from './assets/json'
import image from './assets/panda.png'
import xml from './assets/file.xml'
import csv from './assets/docs.csv'
import { Tooltip, Toast, Popover } from 'bootstrap';

import $ from 'jquery';
import sum from "./some";
import './assets/style.scss'
import 'choices.js/public/assets/scripts/choices.min'
import noUiSlider from 'nouislider';



console.log(sum(5,20));

console.log('JSON:', json);
console.log(typeof image);
console.log('XML:', xml);
console.log('CSV:', csv);


/************************ChoicesJs select*************************/

const customSelect = () => {
    const element = document.querySelector('.js-choice');
    const choices = new Choices(element, {
        shouldSort: false,
        searchEnabled: true,
    });
};
customSelect();


/************************Sliders*************************/

let startSlider1 = document.getElementById('slider-start1');
let startSlider2 = document.getElementById('slider-start2');
let startSlider3 = document.getElementById('slider-start3');

noUiSlider.create(startSlider1, {
    start: [10, 90],
    connect: true,
    range: {
        'min': [0],
        'max': [100]
    }
});

noUiSlider.create(startSlider2, {
    start: [10, 90],
    connect: true,
    tooltips: [true, true],
    range: {
        'min': [0],
        'max': [100]
    }
});

noUiSlider.create(startSlider3, {
    start: [10, 90],
    connect: true,
    tooltips: [true, true],
    range: {
        'min': [0],
        'max': [100]
    },
    pips: {
        mode: 'values',
        values: [0, 25, 50, 75, 100],
        density: 4
    }
});


/************************Input file*************************/

