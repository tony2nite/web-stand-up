// Base class for all models.
module.exports = Backbone.Model.extend({
        idAttribute: 'name',
        sync: Backbone.tabletopSync,

        initialize: function(options) {
	        this.tabletop = {
	        	instance: options.storage,
	          	sheet: 'Jokes'
        	};
        }
});