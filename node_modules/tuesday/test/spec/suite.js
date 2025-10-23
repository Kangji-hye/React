'use strict';

let tuesday = require('../../tuesday.js');
let _ = require('lodash');

module.exports = (test, Promise) => {

    return tuesday.data()
    .then(data => {
        test.equal(_.isString(data), true, 'Fetching #data');
        return tuesday.images();
    })
    .then(images => {
        return test.equal(_.isArray(images), true, 'Fetching #images');
    })
    .catch(err => test.fail(err))
};


