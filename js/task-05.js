const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', userName)

function userName() {
    if (nameInput.value === '') {
        nameOutput.textContent = 'Anonymous'
    } else {
        nameOutput.textContent = nameInput.value
    }
}