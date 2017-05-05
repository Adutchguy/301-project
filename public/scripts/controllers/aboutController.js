'use strict';

(function(module) {
  const aboutController = {};

  aboutController.init = function() {
    $('section').hide();
    $('.the-team').show();
  }

  module.aboutController = aboutController;
})(window);
