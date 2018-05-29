// nhsmail - input channel adaptor for NHS Mail
//
// MAK 06/12/2017 - Initial version

"use strict";

var ImapClient = require('emailjs-imap-client');

module.exports = class NHSMail {
    
        // Constructor
        constructor(config, username, password){
            // Create Imap Client
            this.client = new ImapClient(config.imapHostname, config.imapPort, {
                auth: {
                    user: username,
                    pass: password
                },
                useSecureTransport: true
            });
        }
    
        // Methods
        Open() {
            this.client.connect().then(() => {  });
            client.selectMailbox('INBOX').then((mailbox) => { });
        }

        Close() {
            this.client.close().then(() => { /* ready to roll */ });;
        }
    }