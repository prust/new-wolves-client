var AmpersandView = require('ampersand-view');

var HomePage = AmpersandView.extend({
  'autoRender': true,
  'template': '<section class="page"><h1>Hey there, wolves</h1></section>'
});

module.exports = HomePage;