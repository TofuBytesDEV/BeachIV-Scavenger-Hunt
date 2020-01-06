$ npm install p-wait-for

const pWaitFor = require('p-wait-for');
const pathExists = require('path-exists');

(async () => {
	await pWaitFor(() => pathExists('/go.txt'));
	console.log('Yay! The file now exists.');
    window.location.replace("https://tofubytesrbx.github.io/BeachIV-Scavenger-Hunt/start.html");
})();