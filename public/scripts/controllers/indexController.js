'use strict';

(function(module) {
  const indexController = {};

  indexController.index = () => {
    events.requestEvents();
  };

  module.indexController = indexController;
})(window);
