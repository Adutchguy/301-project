'use strict';

(function(module) {
  const indexTeamController = {};

  indexTeamController.team = function() {
    $('.events').hide();
    $('footer').fadeIn();
    $('#team-button').hide();
    $('#home-button').show();
  }

  indexTeamController.home = function() {
    $('footer').hide();
    $('.events').fadeIn();
    $('#home-button').hide();
    $('#team-button').show();
  }

  module.indexTeamController = indexTeamController;
}(window))
