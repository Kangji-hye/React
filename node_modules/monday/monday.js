'use strict';

let monday = require('wikijs').default().page('monday');

module.exports = {
	data : () => monday.then(page => page.content()),
	images : () => monday.then(page => page.images())
};