'use strict';

let thursday = require('wikijs').default().page('thursday');

module.exports = {
	data : () => thursday.then(page => page.content()),
	images : () => thursday.then(page => page.images())
};