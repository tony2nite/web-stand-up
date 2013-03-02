var application = require('application');

module.exports = Backbone.Router.extend({
  routes: {
    '': 'home'
  },

  home: function() {
  	console.log('home route');

  	application.jokesCollection.fetch();

    // $('body').html(application.homeView.render().el);
  }
});
