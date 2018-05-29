// cmgr - configuration management utility module
//
// MAK 06/12/2017 - Initial version

"use strict";

var fs = require("fs");

module.exports = class Configuration {

    // Constructor
    constructor(){
        var rawdata = fs.readFileSync("config.json");
        this.configdata = JSON.parse(rawdata);
    }

    // Getters
    get app() {
        return this.configdata.app;
    }

    get auditFileName() {
        return this.configdata.auditFileName;
    }

    get imapHostname() {
        return this.configdata.imapHostname;
    }

    get imapPort() {
        return this.configdata.imapPort;
    }
}