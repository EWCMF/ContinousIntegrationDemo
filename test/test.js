var assert = require('assert');
var functions = require('../functions');

describe('Add', function() {
    it("It should equal 7", function() {
        assert.strictEqual(functions.add(5, 2), 7);
    })
})

describe('AddNegative', function() {
    it("It should equal -6", function() {
        assert.strictEqual(functions.add(-3, -3), -6);
    })
})