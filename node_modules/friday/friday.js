'use strict';

let friday = require('wikijs').default().page('friday');

module.exports = {
	data : () => friday.then(page => page.content()),
	images : () => friday.then(page => page.images())
};