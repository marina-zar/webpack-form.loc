import './assets/main.css';
import json from './assets/json'
import image from './assets/panda.png'
import xml from './assets/file.xml'
import csv from './assets/docs.csv'

// import $ from 'jquery';
import sum from "./some";
import './assets/style.scss'
import 'choices.js/public/assets/scripts/choices.min'

// $('.title').html('Webpack lessons done!');

console.log(sum(5,20));

console.log('JSON:', json);
console.log(typeof image);
console.log('XML:', xml);
console.log('CSV:', csv);

/************************ChoicesJs select*/

const customSelect = () => {
    const element = document.querySelector('.custom__select');
    const choices = new Choices(element, {
        // searchEnabled: false,
    });
};
customSelect();