"use strict";

var util = require('util');
var duplexer = require('duplexer2');
var through2 = require('through2');
var out = through2({ objectMode: true });
var _ = require('lodash');

// All tap-out parse events. See comments below.
//
var events = [

	// type - this will always be assert
	// name - the name of the assertion
	// raw - the raw output before it was parsed
	// number - the number of the assertion
	// ok - whether the assertion passed or failed
	// test - the number of the test this assertion belongs to
	//
	'assert',

	// total : total number of tests planned
	// pass : total passed
	// fail : total failed
	//
	'result',

	// When a test is set up
	//
	// type - value will always be test
	// name - name of the test
	// raw - the raw output before it was parsed
	// number - the number of the test
	//
	'test',

	// type - this will always be version
	// raw - the raw output before it was parsed
	//
	'version'
];

// Create default transformer collection for all events.
// This default is replaced by the first call to #transform
//
var transformers = events.reduce(function(coll, ev) {

	coll[ev] = function $baseTransformer(tapObj) {

		// Just send back the raw TAP output
		//
		return util.format('\nTAP> %s\n', tapObj.raw);
	};

	return coll;

}, {});


// This is the stream receiver for @tape objects
//
var parser = through2.obj(function(tapObj, enc, callback) {

	var trans = transformers[tapObj.type];
	var res;

	if(!trans) {
		return callback()
	}

	res = trans(tapObj);

	out.push(typeof res === 'undefined' ? '.' : res);

	callback()
})

// Prime the output pump by creating a newline.
//
out.push('\n');

module.exports = function(cfg) {

	// It's ok to send no configuration.
	//
	cfg = typeof cfg === 'undefined' ? {} : cfg;

	// Note that we are expecting objects from @tape output
	//
	var stream = duplexer({
		writableObjectMode: true
	}, parser, out);

	if(!_.isPlainObject(cfg)) {
		throw new Error('pushpin #configure expects an Object');
	}

	Object.keys(cfg).forEach(function(event) {

		if(!~events.indexOf(event)) {
			throw new Error('Invalid event name received by pushpin -> ' + event);
		}

		if(!_.isFunction(cfg[event])) {
			throw new Error('pushpin expected a Function. Received -> ' + fn + ' for event -> ' + event);
		}

		transformers[event] = cfg[event];
	});

	return {
		stream: stream,
		finish: function(resObj) {
			out.push(transformers['result'](resObj));
		}
	};
};