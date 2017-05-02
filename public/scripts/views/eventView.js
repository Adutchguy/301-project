'use strict';

(function(module) {
  const eventView = {};

  eventView.render = function() {
    const template = Handlebars.compile($('#event-template').text());
    events.objects.forEach(arrayItem => {
      $('#events').append(template(arrayItem));
    });
  };
  module.eventView = eventView;
})(window);
