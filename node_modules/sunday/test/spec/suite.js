'use strict';

let sunday = require('../../sunday.js');
let _ = require('lodash');

module.exports = (test, Promise) => {

    return sunday.data()
    .then(data => {
        test.equal(_.isString(data), true, 'Fetching #data');
        return sunday.images();
    })
    .then(images => {
        return test.equal(_.isArray(images), true, 'Fetching #images');
    })
    .catch(err => test.fail(err))
};


