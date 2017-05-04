'use strict';

(function(module) {
  const eventView = {};
  eventView.eventNames = [];

  eventView.render = function() {
    const template = Handlebars.compile($('#event-template').text());
    events.objects.forEach(arrayItem => {
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

        val = $(this).attr('data-genre');
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
        console.log($(this).val());
        $('article').hide();
        $(`article[data-venue="${$(this).val()}"]`).fadeIn();
        console.log(`article[data-venue="${$(this).val()}"]`);
      } else {
        $('article').fadeIn();
      }
    });
  };

  eventView.handleGenreFilter = function() {
    $('.genre-filter').on('change', function() {
      if ($(this).val()) {
        $('article').hide();
        $(`article[data-genre="${$(this).val()}"]`).fadeIn();
      } else {
        $('article').fadeIn();
      }
    });
  };

  module.eventView = eventView;
})(window);
