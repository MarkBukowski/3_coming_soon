import { progressBarData } from '../data/progressBarData.js';

function renderProgressBar(selector, data) {

    let HTML = '';
    for (let i = 0; i < progressBarData.length; i++) {
        const barObject = data[i];

        HTML += `<div class="progress-bar">
        <p class="label">${barObject.label}</p>
        <p class="value">${barObject.value}%</p>
        <div class="percentageMax">
                        <div class="percentage-current" style="width: ${barObject.value}%;">
                            <div class="percentage-animation"></div>
                        </div>
                    </div>
                </div>`;
    }

    let DOM = document.querySelector(selector);

    DOM.innerHTML += HTML;
}

export { renderProgressBar }