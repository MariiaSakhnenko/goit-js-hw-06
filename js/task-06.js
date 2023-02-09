const inputRef = document.querySelector('#validation-input');

const onBlurBorderColor = () => {
if (inputRef.value.length === Number(inputRef.dataset.length)) {
        inputRef.classList.remove(`invalid`);
        inputRef.classList.add(`valid`);
        return;
    } else {
        inputRef.classList.remove(`valid`);
        inputRef.classList.add(`invalid`);
    };
}

inputRef.addEventListener('blur', onBlurBorderColor);
