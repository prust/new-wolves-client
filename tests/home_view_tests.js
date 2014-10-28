var HomeView = require('../pages/home_page.js');
var assert = require('assert');

describe('HomeView', function() {
  it('should contain "Hey there, wolves"', function() {
    var view = new HomeView();
    assert.equal(view.el.textContent, "Hey there, wolves");
  });
});
