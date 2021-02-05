import { socialsData } from '../data/socialsData.js';

function renderSocials(selector, data) {

    let HTML = '';
    for (let i = 0; i < socialsData.length; i++) {
        let sociaIcon = data[i];

        HTML += `<a href="${sociaIcon.href}"><img src="./icons/${sociaIcon.name}.png" alt=""></a>`;

    }
    const DOM = document.querySelector(selector);
    DOM.innerHTML += HTML;
}

export { renderSocials }