var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Transactions = require('../collections/Transactions');

var AppController = {

    currentView: null,

    transactions: null,

    $centerContainer: $('#center'),

    renderView: function(view) {
        this.currentView && this.currentView.remove();
        this.$centerContainer.append(view.$el);
        this.currentView = view;
    }
};


module.exports = function (options) {
    var app = AppController;
    _.extend(app, Backbone.Events);
    options.retrieveTransactions(function (err, data) {
        app.transactions = new Transactions(data, {});
        app.trigger('ready');
    });
    return app;
};