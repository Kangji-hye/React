'use strict';

let thursday = require('../../thursday.js');
let _ = require('lodash');

module.exports = (test, Promise) => {

    return thursday.data()
    .then(data => {
        test.equal(_.isString(data), true, 'Fetching #data');
        return thursday.images();
    })
    .then(images => {
        return test.equal(_.isArray(images), true, 'Fetching #images');
    })
    .catch(err => test.fail(err))
};


