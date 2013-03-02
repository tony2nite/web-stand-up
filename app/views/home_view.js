var View = require('./view');
var template = require('./templates/home');

module.exports = View.extend({
  id: 'home-view',
  template: template,

  initialize: function (options) {
  	console.log('binding', this.collection);
    _.bindAll(this, "render");
    this.collection.bind('reset', this.render);
  },

  render: function() {
  	var data = this.collection.toJSON();
  	console.log('render', data);
	this.el.innerHTML = template({jokes: data});
  	return this;
  }

});
