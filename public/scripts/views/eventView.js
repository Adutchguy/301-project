'use strict';

(function(module) {
  const eventView = {};
  eventView.eventNames = [];

  eventView.render = function() {
    const template = Handlebars.compile($('#event-template').text());
    Database.all.forEach(arrayItem => {
      $('#events').append(template(arrayItem));
    });
    eventView.populateFilters();
    eventView.handleVenueFilter();
    eventView.handleGenreFilter();
  };

  eventView.populateFilters = function() {
    $('.event-articles').each(function() {
      if (!$(this).hasClass('event-template')) {
        eventView.eventNames.push($(this).find('p.venue').text());
        let val = $(this).find('p.venue').text();
        let optionTag = `<option value="${val}">${val}</option>`;

        if ($(`.venue-filter option[value="${val}"]`).length === 0) {
        $('.venue-filter').append(optionTag);
        }

        if ($(this).attr('data-genre') == 'Undefined') {
          val = 'Other'
          }else {
            val = $(this).attr('data-genre');
          }
        optionTag = `<option value="${val}">${val}</option>`;
        if ($(`.genre-filter option[value="${val}"]`).length === 0) {
          $('.genre-filter').append(optionTag);
        }
      }
    });
  };

  eventView.handleVenueFilter = function() {
    $('.venue-filter').on('change', function() {
      if ($(this).val()) {
        $('article').hide();
        $(`article[data-venue="${$(this).val()}"]`).fadeIn(800);
      } else {
        $('article').hide();
        $('article').fadeIn(800);
      }
      $('.genre-filter').val('');
    });
  };

  eventView.handleGenreFilter = function() {
    $('.genre-filter').on('change', function() {
      if ($(this).val() == 'Other') {
        var val = 'Undefined'
      } else {
          var val = $(this).val();
        }
      if (val) {
        $('article').hide();
        $(`article[data-genre="${val}"]`).fadeIn(800);
      } else {
        $('article').hide();
        $('article').fadeIn(800);
      }
      $('.venue-filter').val('');
    });
  };

  module.eventView = eventView;
})(window);
