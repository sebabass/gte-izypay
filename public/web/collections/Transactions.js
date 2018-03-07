var _ = require('underscore');
var Backbone = require('backbone');
var TransactionsModel = require('../models/transactionModel');

var Transactions = Backbone.Collection.extend({

    model: function (attrs, options) {
        return new TransactionsModel(attrs, options);
    },

    sortByFieldTop: function (field, n, direction) {
        var sorted = _.groupBy(this.models, function (model) {
            return model.get(field);
        });

        sorted = _.sortBy(sorted, 'length');

        if (direction === 'desc') {
            sorted = sorted.reverse()
        }

        return _.first(sorted, 5);
    },

    initialize: function (models, options) {
        return this;
    },

    first: function (n) {
        return _.first(this.models, n);
    }
});

module.exports = Transactions;