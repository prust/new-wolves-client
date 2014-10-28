var assert = require('assert');

var MainView = require('../views/main_view.js');

describe('main view', function() {
	it('should render the text "Some Text"', function() {
		var view = new MainView();
		assert.equal(view.el.textContent, "Some Text");
	});
});