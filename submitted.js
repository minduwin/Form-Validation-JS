// Function to create the submitted page
const body = document.querySelector('body');

export function submittedForm(){
    let newDiv = document.createElement('div');
    newDiv.classList.add('submitted');

    let newImg = document.createElement('img');
    newImg.setAttribute('src', 'task_alt_FILL0_wght400_GRAD0_opsz24.svg');

    let newH1 = document.createElement('h1');
    newH1.textContent = 'Thank You!';

    let newPara = document.createElement('p');
    newPara.textContent = 'The form was submitted successfully.'

    newDiv.appendChild(newImg);
    newDiv.appendChild(newH1);
    newDiv.appendChild(newPara);

    body.appendChild(newDiv);
}