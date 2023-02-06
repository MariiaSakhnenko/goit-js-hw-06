document.querySelector('body').style.backgroundColor = '#EBECF0';
const inputRef = document.getElementById('validation-input');
inputRef.addEventListener('blur', onBlurBorderColor);

function onBlurBorderColor(event) {
    const inputValue = inputRef.getAttribute('data-length');
    
    if (inputRef.value.length === Number(inputValue)) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    }
    if (inputRef.value.length === 0) {
        inputRef.classList.remove('valid');
        inputRef.classList.remove('invalid');
    }
    if (inputRef.value.length !== Number(inputValue) && inputRef.value.length !== 0) {
        inputRef.classList.add('invalid');
    }
}