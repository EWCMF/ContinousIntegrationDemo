var assert = require('assert');
var functions = require('../public/javascripts/functions');

describe("Add", function() {
    it("It should equal 7", function() {
        assert.strictEqual(functions.add(3, 4), 7);
    });
});

describe('AddNegative', function() {
    it("It should equal -6", function() {
        assert.strictEqual(functions.add(-3, -3), -6);
    });
});