const email = document.getElementById('mail');
const spanError = document.querySelector('.error span');

const country = document.getElementById('country');
const zip = document.getElementById('zip');
const psw = document.getElementById('psw');
const confPsw = document.getElementById('confPsw');

export function mailError(){
    if (email.validity.valid || email.value === ''){
        spanError.textContent = 'Enter a valid email';
    } else if (email.validity.typeMismatch){
        spanError.textContent = 'Entered value needs to be an email';
    } else if (email.validity.tooShort){
        spanError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }
    spanError.className = 'error';
}

export function countryError(){
    if (country.validity.valid || country.value === ''){
        spanError.textContent = 'Enter a valid Country';
    } else if (email.validity.tooShort){
        spanError.textContent = `Country should be at least ${country.minLength} characters; you entered ${country.value.length}.`;
    }
    spanError.className = 'error';
}

export function zipError(){
    if (zip.validity.valid || zip.value === ''){
        spanError.textContent = 'Enter a valid Zip Code';
    } else if (zip.validity.tooShort){
        spanError.textContent = `Zip Code should be at least ${zip.minLength} characters; you entered ${zip.value.length}.`;
    }
    spanError.className = 'error';
}

export function passError() {
    if (psw.validity.valueMissing){
        spanError.textContent = 'Enter a password'
    } else if (psw.validity.tooShort) {
        spanError.textContent = `Password should be at least ${psw.minLength} characters; you entered ${psw.value.length}.`;
    }
    spanError.className = 'error';
}

export function confError() {
    if (confPsw.validity.valid || confPsw.value === ''){
        spanError.textContent = 'Invalid Password';
    }
    spanError.className = 'error';
}

export { email, spanError, country, zip, psw, confPsw };