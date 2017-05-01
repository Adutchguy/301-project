'use strict';

(function(module) {
  const repoView = {};

  repoView.index = function() {
    const template = Handlebars.compile($('#event-template').text());
    console.log(template);
  };

  module.repoView = repoView;
})(window);
