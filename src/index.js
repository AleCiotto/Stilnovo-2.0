// JS Goes here - ES6 supported

import "./css/main.css";

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.menu').addEventListener('click', event => {
        event.currentTarget.closest('header').classList.toggle('open');
    });

    // Contact form
    let handleSubmit = e => {
      e.preventDefault()
      let myForm = document.querySelector(".contact-us__form");
      let formData = new FormData(myForm)
      fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      }).then(() => {
        myForm.classList.add('success');
        myForm.innerHTML = 'Grazie per averci contattato, proveremo a rispondere il prima possibile!';
      }).catch((error) =>
        alert(error))
    }
  
    const contactUsForm = document.querySelector(".contact-us__form");
    if (contactUsForm) {
        contactUsForm.addEventListener("submit", handleSubmit);
    }

    console.log(`
      ---------------------------------
      |                                 |
      |             Mercury             |
      |                                 |
      ---------------------------------
    `);
});