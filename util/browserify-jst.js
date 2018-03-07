var _ = require('underscore');
var through = require('through');
var filenamePattern = /\.html$/;

// @source: https://www.npmjs.com/package/browserify-jst

var wrap = function (template) {
    return '' +
        'var _ = require(\'underscore\');\n' +
        'module.exports = ' +
        template;
};

function compiler (text, options) {
    return _.template(text, null, options).source;
}

module.exports = function (file, b) {
    if (!filenamePattern.test(file)) {
        return through();
    }
    var input = '';
    var write = function (buffer) {
        input += buffer;
    };
    var end = function () {
        this.queue(wrap(compiler(input)));
        this.queue(null);
    };
    return through(write, end);
};
