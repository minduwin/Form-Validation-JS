// Imports
import { mailError, countryError, zipError, passError, confError } from "./error.js";
import { email, spanError, country, zip, psw, confPsw } from "./error.js";
import { submittedForm } from "./submitted.js";

// Variables
const container = document.querySelector('.container');
const form = document.querySelector('form');
const validMail = document.getElementById('validMail');
const validCountry = document.getElementById('validCountry');
const validZip = document.getElementById('validZip');
const validPass = document.getElementById('validPass');
const validConfirmation = document.getElementById('validConfirmation');

// Validations
email.addEventListener('input', (event) => {
    if (email.validity.valid){
        spanError.textContent = '';
        spanError.className = 'error';
        validMail.className = 'isvalid';
    } else {
        mailError();
        validMail.className = 'notvalid';
    }
});

country.addEventListener('input', (event) => {
    if (country.validity.valid){
        spanError.textContent = '';
        spanError.className = 'error';
        validCountry.className = 'isvalid';
    } else {
        countryError();
        validCountry.className = 'notvalid';
    }
})

zip.addEventListener('input', (event) => {
    if (zip.validity.valid){
        spanError.textContent = '';
        spanError.className = 'error';
        validZip.className = 'isvalid';
    } else {
        zipError();
        validZip.className = 'notvalid';
    }
})

psw.addEventListener('input', (event) => {
    if (psw.validity.valid){
        spanError.textContent = '';
        spanError.className = 'error';
        validPass.className = 'isvalid';
    } else {
        passError();
        validPass.className = 'notvalid';
    }
})

confPsw.addEventListener('input', (event) => {
    if (document.getElementById('psw').value === document.getElementById('confPsw').value) {
        validConfirmation.className = 'isvalid';
    } else {
        confError();
        validConfirmation.className = 'notvalid';
    }
})


// Form Submission
form.addEventListener('submit', (event) => {
    event.preventDefault();

    let messages = [];
    
    if(!email.validity.valid){
        mailError();
        messages.push(mailError.value);
    }

    if(!country.validity.valid){
        countryError();
        messages.push(countryError.value);
    }

    if(!zip.validity.valid){
        zipError();
        messages.push(zipError.value);
    }

    if(!psw.validity.valid){
        passError();
        messages.push(passError.value);
    }

    if(!confPsw.validity.valid){
        confError();
        messages.push(confError.value);
    }

    if (messages.length > 0) {
        alert('Fix errors before submit...')
    } else {
        container.style.display = 'none';
        submittedForm();
    }
});