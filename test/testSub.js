var assert = require('assert');
var functions = require('../functions');

describe("Sub", function() {
    it("It should equal 20", function() {
        assert.strictEqual(functions.sub(30, 10), 20);
    });
});

// fail test
describe('SubNegative', function() {
    it("It should equal -55", function() {
        assert.strictEqual(functions.add(0, -55), -54);
    });
});