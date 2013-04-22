var View = require('./view');
var template = require('./templates/home');

module.exports = View.extend({
  id: 'home-view',
  template: template,

  jokeIndex: 0,
  DISPLAY_TIME: 5000,

  initialize: function (options) {
  	console.log('binding', this.collection);
    _.bindAll(this, "render");
    this.collection.bind('reset', this.render);

    $(this.el).css({display: "none"});
  },



  render: function() {
  	var self = this;


  	var joke = this.collection.at(this.jokeIndex);
	this.el.innerHTML = template({joke: joke.toJSON()});

	var increment = function () {
		self.jokeIndex++;
		if (self.jokeIndex == self.collection)
			self.jokeIndex = 0;
		self.render();
	};

	$(this.el)
		.fadeIn()
		.delay(self.DISPLAY_TIME)
		.fadeOut('slow', function() {increment();})
  	return this;
  }

});
