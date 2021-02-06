function renderSocials(selector, data) {
    // INPUT VALIDATION
    if (typeof selector !== 'string' ||
        selector === '') {
        console.error('error, wrong selector parameter.');
        return false;
    }
    if (!Array.isArray(data ||
        data.length === 0)) {
        console.error('error, wrong data parameter.');
        return false;
    }

    // LOGIC
    const DOM = document.querySelector(selector);
    if (!DOM) {
        return false;
    }

    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        let sociaIcon = data[i];

        if (typeof sociaIcon !== 'object' ||
            Array.isArray(sociaIcon)) {
            console.warn('warning, incorrect format object:', sociaIcon);
        }

        HTML += `<a href="${sociaIcon.href}"><img src="./icons/${sociaIcon.name}.png" alt=""></a>`;

    }

    // POST LOGIC VALIDATION
    if (!HTML) {
        console.error('error, no valid data to HTML');
        return false;
    }

    // return result
    DOM.innerHTML += HTML;
}

export { renderSocials }