// JS Goes here - ES6 supported

import "./css/main.css";

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.menu').addEventListener('click', event => {
        event.currentTarget.closest('header').classList.toggle('open');
    });

    console.log(`
      ---------------------------------
      |                                 |
      |             Mercury             |
      |                                 |
      ---------------------------------
    `);
});