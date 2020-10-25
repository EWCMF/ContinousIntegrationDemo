var assert = require('assert');
var functions = require('../code/functions');

describe("Sub", function() {
    it("It should equal 20", function() {
        assert.strictEqual(functions.sub(30, 10), 20);
    });
});


describe('SubNegative', function() {
    it("It should equal -55", function() {
        assert.strictEqual(functions.sub(0, 55), -55);
    });
});

describe('SubNegative2', function() {
    it("It should equal -3", function() {
        assert.strictEqual(functions.sub(5, 8), -3);
    });
});