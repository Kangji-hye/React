'use strict';

let tuesday = require('wikijs').default().page('tuesday');

module.exports = {
	data : () => tuesday.then(page => page.content()),
	images : () => tuesday.then(page => page.images())
};