'use strict';

let friday = require('../../friday.js');
let _ = require('lodash');

module.exports = (test, Promise) => {

    return friday.data()
    .then(data => {
        test.equal(_.isString(data), true, 'Fetching #data');
        return friday.images();
    })
    .then(images => {
        return test.equal(_.isArray(images), true, 'Fetching #images');
    })
    .catch(err => test.fail(err))
};


