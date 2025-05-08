const input = document.getElementById('inputBox');
const display = document.getElementById('display');

input.addEventListener('input', function() {
    display.textContent = input.value;
});