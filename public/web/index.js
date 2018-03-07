var $ = require('jquery');
global.jQuery = $;
require('bootstrap/js/transition');
require('bootstrap/js/dropdown');
require('bootstrap/js/tab');
require('bootstrap/js/modal');
require('bootstrap/js/tooltip');
require('bootstrap/js/button');
require('bootstrap/js/popover');
require('bootstrap/js/collapse');

// run
require('./libs/router');
//var mainView = require('./views/main');
//mainView.run();