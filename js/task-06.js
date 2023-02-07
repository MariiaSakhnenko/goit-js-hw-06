// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.



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
