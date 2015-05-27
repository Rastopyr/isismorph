/* global require, describe, it, before, after */

var chai = require('chai'),
    fs = require('fs'),
    jsDom = require('jsdom'),
    assert = chai.assert,
    expect = chai.expect;

var isIsmorph = require('./index');

describe('Browser', function () {
    var text = fs.readFileSync('./index.js', "utf-8"), window;

    before(function (done) {
        jsDom.env({
            html: "<p>test stub page</p>",
            src: [text],
            done: function (err, localWindow) {
                window = localWindow;
                done(err);
            }
        });
    });

    it('should have API', function () {
        ['isBrowser', 'isNode', 'isWebWorker'].forEach(function (propName) {
            expect(window).to.have.property(propName);
            assert.equal(typeof window[propName], 'function');
        });
    });

    it('.isNode should return `false`', function () {
        assert.notOk(window.isNode());
    });

    it('.isBrowser should return `true`', function () {
        assert.ok(window.isBrowser());
    });

    it('.isWebWorker should return `false`', function () {
        assert.notOk(isIsmorph.isWebWorker());
    });

    after(function () {
        window.close();
    });
});

describe('Node', function () {
    it('should have API', function () {
        ['isBrowser', 'isNode', 'isWebWorker'].forEach(function (propName) {
            expect(isIsmorph).to.have.property(propName).and.instanceof(Function);
        });
    });

    it('.isNode should return `true`', function () {
        assert.ok(isIsmorph.isNode());
    });

    it('.isBrowser should return `false`', function () {
        assert.notOk(isIsmorph.isBrowser());
    });

    it('.isWebWorker should return `false`', function () {
        assert.notOk(isIsmorph.isWebWorker());
    });
});
