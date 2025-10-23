"use strict";

var util = require('util');
var chalk = require('chalk');
var _ = require('lodash');
var figures = require('figures');

module.exports = {

	'assert' : function $assertTransformer(tapObj) {

		var glyph = tapObj.ok
			? chalk.green(figures.tick)
			: chalk.red(figures.cross);

		var name = chalk.dim(tapObj.name);

		return glyph + ' ' + name + '\n';
	},

	'test' : function $testTransformer(tapObj) {
		return chalk.yellow(tapObj.name) + '\n';
	},

	'version' : function $versionTransformer(tapObj) {
		return chalk.blue(tapObj.name) + '\n';
	},

	'result' : function $resultTransformer(rob) {

		return chalk.yellow(rob.total) + chalk.cyan(' test(s) planned\n')
			+  chalk.green(rob.pass) + chalk.cyan(' test(s) passed\n')
			+ chalk.red(rob.fail) + chalk.cyan(' test(s) failed\n');
	}
};
	
   