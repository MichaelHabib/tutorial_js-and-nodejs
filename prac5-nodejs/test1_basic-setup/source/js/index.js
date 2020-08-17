// import  _ from 'lodash';
import '../css/plain_css.css';
import '../scss/test.scss';
// import Icon from './images/icon.png';

/* OS,  FS & File management */
// const path = require('path');
// const fs = require('fs');

// const util = require('util');
//const exec = util.promisify(require('child_process'));
// const exec = require('child_process');
// const express = require('express');
// const app = express();

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());
