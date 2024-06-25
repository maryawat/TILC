const chai = require('chai');
const expect = chai.expect;
const add = require('../math');

describe('add function', () => {
    it('should add two positive numbers', () => {
        expect(add(1, 2)).to.equal(3);
    });

    it('should add two negative numbers', () => {
        expect(add(-1, -2)).to.equal(-3);
    });

    it('should add zero', () => {
        expect(add(0, 0)).to.equal(0);
    });
});