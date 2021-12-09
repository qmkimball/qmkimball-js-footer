'use strict';

const moment = require('moment');

exports.footer = function(name) {
    return "CopyRight " + moment().format('YYYY') + " " + name + "All rights reserved";
};