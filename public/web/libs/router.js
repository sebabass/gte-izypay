var _ = require('underscore');
var Backbone = require('backbone');
var app = require('./app');
var HomeView = require('../views/home');

var GteRouter = Backbone.Router.extend({
    routes: {
        '': 'root',
        '*default': 'default'
    },

    initialize: function () {
        this.listenTo(app, 'ready', function () {
            Backbone.history.start();
        });
    },

    root: function () {
        var view = new HomeView({});
        app.renderView(view);
        Backbone.history.navigate('#'); // just change URI, not run route action
    },

    default: function () {
        Backbone.history.navigate('#', {trigger: true}); // redirect on home
    }
});

module.exports = new GteRouter();