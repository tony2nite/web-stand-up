var Joke = require('models/model');

// Base class for all collections.
module.exports = Backbone.Collection.extend({
      // Reference to this collection's model.
      model: Joke,
      sync: Backbone.tabletopSync,

      initialize: function(options) {
  	    this.tabletop = {
    	    instance: options.storage,
        	sheet: 'Jokes'
      	};
      }
});