// GENERATE HTML CLOCK TEXT
function clock(selector, deadline) {
    const DOM = document.querySelector(selector);
    let allValuesDOM = null;
    let numbers = calcTime(deadline);
    const labels = ['days', 'hours', 'minutes', 'seconds'];
    let HTML = '';

    for (let i = 0; i < 4; i++) {
        HTML += `<div class="clock">
                    <p class="value">${timeWithZero(numbers[i])}</p>
                    <p class="label">${labels[i]}</p>
                </div>`;
    }

    DOM.innerHTML += HTML;
    allValuesDOM = document.querySelectorAll(`${selector} .value`); // select value to put time in

    setInterval(() => {         // 
        numbers = calcTime(deadline);
        for (let i = 0; i < 4; i++) {
            allValuesDOM[i].innerText = timeWithZero(numbers[i]);
        }
    }, 1000);
}

// ADD ZERO TO SINGLE DIGIT NUMBER ///////// // IF HTML number is less than 10 it would show up as 9 instead of 09, so we add a string 0 to the beginning
function timeWithZero(number) {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}



function calcTime(deadline) {
    const date = new Date();    // new date object
    const now = Date.now();     // current date & time in milisecs
    let year = date.getFullYear();      // current year
    let fullDL = `${year}-${deadline}`;     // add current year to deadline in string
    let fullDlinMs = (new Date(fullDL)).getTime();      // milisecs left to deadline

    if (fullDlinMs < now) {     // 
        year++;                 // add one year to deadline
        fullDL = `${year}-${deadline}`;     // renew deadline string
        fullDlinMs = (new Date(fullDL)).getTime();      // new deadline in milisecs
    }

    const diff = fullDlinMs - now;      // difference between deadline and current time
    // let seconds = Math.round(diff / 1000);  // total difference in seconds

    // const days = Math.floor(seconds / 3600 / 24);  // total days
    // let leftSeconds = seconds - days * 3600 * 24; // total secs - total days secs

    // const hours = Math.floor(leftSeconds / 3600);  // 
    // leftSeconds -= hours * 3600;

    // const minutes = Math.floor(leftSeconds / 60);
    // leftSeconds -= minutes * 60;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let days = Math.floor(diff / day);
    let hours = Math.floor((diff % day) / hour);
    let minutes = Math.floor((diff % hour) / minute);
    let seconds = Math.floor((diff % minute) / second);



    return [days, hours, minutes, seconds];
}




export { clock }