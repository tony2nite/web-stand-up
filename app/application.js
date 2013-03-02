// Application bootstrapper.
Application = {
  initialize: function(storage) {
    this.storage = storage;

    var HomeView = require('views/home_view');
    var Router = require('lib/router');
    window.JokeCollection = require('models/collection');

    // Ideally, initialized classes should be kept in controllers & mediator.
    // If you're making big webapp, here's more sophisticated skeleton
    // https://github.com/paulmillr/brunch-with-chaplin
    this.jokesCollection = new JokeCollection({storage: Application.storage});
    this.homeView = new HomeView({el: $('#container'), collection: this.jokesCollection});

    this.router = new Router();
    if (typeof Object.freeze === 'function') Object.freeze(this);
  }
}

module.exports = Application;
