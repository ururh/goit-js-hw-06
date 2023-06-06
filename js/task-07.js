const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeControl.addEventListener("input", increase)

function increase() {
    text.style.fontSize = `${fontSizeControl.value}px`
}


