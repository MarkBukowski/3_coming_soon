
function clock(selector, data) {
    let HTML = '';
    const numbers = [432, 9, 37, 39]
    const labels = ['days', 'hours', 'minutes', 'seconds'];
    const DOM = document.querySelector(selector);

    for (let i = 0; i < 4; i++) {
        HTML += `<div class="clock">
                    <p class="value">${timeWithZero(numbers[i])}</p>
                    <p class="label">${labels[i]}</p>
                </div>`;
    }

    DOM.innerHTML += HTML;
}

function timeWithZero(number) {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}














export { clock }