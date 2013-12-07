var test = require('tape');

var mem = require('./index.js');

test('Basic', function(t) {
    mem(function(err, res) {
        t.ok(!err, 'There is no error');
        t.ok(res.totalmem, 'totalmem is there');
        t.ok(res.freemem, 'freemem is there');
        t.end();
    });
});
