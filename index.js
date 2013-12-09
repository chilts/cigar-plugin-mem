// ----------------------------------------------------------------------------
//
// cigar-plugin-mem
//
// Copyright 2013 Andrew Chilton. All Rights Reserved.
//
// License: MIT
//
// ----------------------------------------------------------------------------

// core
var os = require('os');

// ----------------------------------------------------------------------------

module.exports = function(opts, callback) {
    process.nextTick(function() {
        callback(null, {
            totalmem  : os.totalmem(),
            freemem   : os.freemem(),
        });
    });
};

// ----------------------------------------------------------------------------
