'use strict';

(function(module) {
  const eventView = {};

  eventView.render = function() {
    const template = Handlebars.compile($('#event-template').text());
    events.objects.forEach(arrayItem => {
      $('#events').append(template(arrayItem));
    });
  };

  eventView.populateFilters = function() {
    $('article').each(function() {
      if (!$(this).hasClass('template')) {
        let val = $(this).find('.event-venue').text();
        let optionTag = `<option value="${val}">${val}</option>`;

        if ($(`#venue-filter option[value="${val}"]`).length === 0) {
          $('#venue-filter').append(optionTag);
        }

        val = $(this).attr('data-genre');
        optionTag = `<option value="${val}">${val}</option>`;
        if ($(`#genre-filter option[value="${val}"]`).length === 0) {
          $('#genre-filter').append(optionTag);
        }
      }
    });
  };

  eventView.handleVenueFilter = function() {
    $('#venue-filter').on('change', function() {
      if ($(this).val()) {
        $('article').hide();
        $(`article[event-venue="${$(this).val()}"]`).fadeIn();
      } else {
        $('article').fadeIn();
      }
      $('#genre-filter').val('');
    });
  };

  articleView.handleGenreFilter = function() {
    $('#genre-filter').on('change', function() {
      if ($(this).val()) {
        $('article').hide();
        $(`article[data-genre="${$(this).val()}"]`).fadeIn();
      } else {
        $('article').fadeIn();
      }
      $('#venue-filter').val('');
    });
  };

  module.eventView = eventView;
})(window);
