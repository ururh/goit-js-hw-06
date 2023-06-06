const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', validation)

function validation() {
    const dataLength = validationInput.getAttribute('data-length')
    if (Number(dataLength) === validationInput.value.length) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid')
    } else {
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid');
    }
}

