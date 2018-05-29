// amgr - audit management utility module
//
// MAK 06/12/2017 - Initial version

"use strict";

var fs = require("fs");
var dateTime = require('node-datetime');

module.exports = class Audit {

    // Constructor
    constructor(config){
        // Store name of audit file
        // Assumes it will be in the folder in which the app is executed
        this.file = config.auditFileName;
    }

    // Methods
    Log(type, module, message) {
        const NL = (process.platform === 'win32' ? '\r\n' : '\n');
        var dt = dateTime.create();
        var formatted = dt.format('Y-m-d H:M:S:N');
        var s = '[' + type + '][' + formatted + '][' + module + '] ' + message + NL;
        fs.appendFileSync(this.file, s);
    }
}