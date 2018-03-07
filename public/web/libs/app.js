var $ = require('jquery');
var AppFactory = require('../gte-client');

var transactions = null;
var getTransactions = function(callback) {
    $.ajax({
        url: '/json/transactions_mock.json',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            transactions = data;
            return callback(null, transactions);
        },
        error: function(xhr, status, errorThrown) {
            return callback(errorThrown);
        }
    });
};

module.exports = AppFactory({
    retrieveTransactions: function(callback) {
        if (transactions) {
            return callback(null,transactions);
        }
        return getTransactions(callback);
    }
});