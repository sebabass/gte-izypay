var _ = require('underscore');
var Backbone = require('backbone');
var app = require('../libs/app');

var HomeView = Backbone.View.extend({

    template: require('./templates/home.html'),

    maxDisplayedTransactionTop: 5,

    initialize: function () {
        this.render();
    },

    render: function () {
        var modelsTop = app.transactions.sortByFieldTop('event_name', this.maxDisplayedTransactionTop, 'desc');

        var transactions = [];
        _.each(modelsTop, function (models) {
            var _list = [];
            _.each(models, function (o) {
                var u = o.toJSON();
                _list.push(u);
            });
            transactions.push(_list);
        });

        this.$el.html(this.template({transactionsTop: transactions}));
        return this;
    },

    removeView: function () {
        this.remove();
    }
});

module.exports = HomeView;
