'use strict';

(function(module) {
  const indexTeamController = {};

  indexTeamController.team = function() {
    $('#events').hide();
    $('.filter-container').hide();
    $('.about-site').hide();
    $('footer').fadeIn();
    $('#team-button').hide();
    $('#home-button').show();
    $('.genre-filter').val('');
  }

  indexTeamController.home = function() {
    indexController.render();
    $('footer').hide();
    $('.about-site').fadeIn();
    $('.filter-container').fadeIn();
    $('#events').fadeIn();
    $('#home-button').hide();
    $('#team-button').show();
    $('.venue-filter').val('');
  }

  module.indexTeamController = indexTeamController;
}(window))
