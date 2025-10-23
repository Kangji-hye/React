'use strict';

let monday = require('../../monday.js');
let _ = require('lodash');

module.exports = (test, Promise) => {

    return monday.data()
    .then(data => {
        test.equal(_.isString(data), true, 'Fetching #data');
        return monday.images();
    })
    .then(images => {
        return test.equal(_.isArray(images), true, 'Fetching #images');
    })
    .catch(err => test.fail(err))
};


