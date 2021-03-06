// clock
import { clock } from './components/renderClock.js';

// social icons
import { socialsData } from './data/socialsData.js';
import { renderSocials } from './components/renderSocials.js';

// progress bars
import { progressBarData } from './data/progressBarData.js';
import { renderProgressBar } from './components/renderProgressBar.js';

// import { } from '';

// render progrees bars function
renderProgressBar('.aboutStartup', progressBarData);

// render social icons function
renderSocials('.col3 > .icons', socialsData);

// render clock function
clock('.timeLeft', '01-04 14:00:00');
