'use strict';

(function(module) {
  const aboutController = {};

  aboutController.init = function() {
    $('.tab').hide();
    $('.the-team').show();
  }

  module.aboutController = aboutController;
})(window);
