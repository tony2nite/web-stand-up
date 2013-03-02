var application = require('application');

$(function() {
  var public_spreadsheet_url = "https://docs.google.com/spreadsheet/pub?key=0Ar82_f2iKtoCdHR0QXk0cllVS0trdG43MndZNEhEc1E&output=html";

  var storage = Tabletop.init( { key: public_spreadsheet_url,
                                      wait: true } )

  application.initialize(storage);
  Backbone.history.start();
});
