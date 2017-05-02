'use strict';

(function(module) {
  const indexController = {};
  indexController.render = () => {
    $('#events').children().remove();
    events.requestEvents(eventView.render);
  };

  module.indexController = indexController;
})(window);
