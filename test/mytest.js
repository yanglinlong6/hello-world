var lib = require('../src/mytest.js');

// eslint-disable-next-line no-undef
describe('module', function () {
    // eslint-disable-next-line no-undef
    describe('limit', function () {
        // eslint-disable-next-line no-undef
        it('limit should success', function () {
            let number = lib.limit(10);
            console.log(number)
        });
    });
    // eslint-disable-next-line no-undef
    describe("yang", function () {
        // eslint-disable-next-line no-undef
        it('should success', function () {
            console.log("linlong")
        });
    })
});

var assert = require('assert');
// eslint-disable-next-line no-undef
describe('Array', function () {
    // eslint-disable-next-line no-undef
    describe('#indexOf()', function () {
        // eslint-disable-next-line no-undef
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(4));
            console.log("yang")
        });
    });
});

// eslint-disable-next-line no-undef
describe('meili', function () {
    console.log("nhao")
    // eslint-disable-next-line no-undef
    it('should it', function () {
        console.log("meihao")
    });
});