'use strict';

let wednesday = require('../../wednesday.js');
let _ = require('lodash');

module.exports = (test, Promise) => {

    return wednesday.data()
    .then(data => {
        test.equal(_.isString(data), true, 'Fetching #data');
        return wednesday.images();
    })
    .then(images => {
        return test.equal(_.isArray(images), true, 'Fetching #images');
    })
    .catch(err => test.fail(err))
};


