var domready = require('domready');

var MainView = require('./views/main_view.js');

window.app = {
	'init': function() {
		domready(function() {
			this.view = new MainView({el: document.body});
		}.bind(this));
	}
};

window.app.init();