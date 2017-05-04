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
  };

  eventView.populateFilters = function() {
    $('.event-articles').each(function() {
      if (!$(this).hasClass('event-template')) {
        eventView.eventNames.push($(this).find('p.venue').text());
        var val = $(this).find('p.venue').text();
        var optionTag = `<option value="${val}">${val}</option>`;
        // debugger;
        console.log(val);
        if (true) {
        $('.venue-filter').append(optionTag);
        }
      }
    });
  };


  // eventView.handleVenueFilter = function() {
  //   $('#venue-filter').on('change', function() {
  //     if ($(this).val()) {
  //       $('article').hide();
  //       $(`article[event-venue="${$(this).val()}"]`).fadeIn();
  //     } else {
  //       $('article').fadeIn();
  //     }
  //     $('#genre-filter').val('');
  //   });
  // };

  // eventView.handleGenreFilter = function() {
  //   $('#genre-filter').on('change', function() {
  //     if ($(this).val()) {
  //       $('article').hide();
  //       $(`article[data-genre="${$(this).val()}"]`).fadeIn();
  //     } else {
  //       $('article').fadeIn();
  //     }
  //     $('#venue-filter').val('');
  //   });
  // };

    // $(function () {
    //     $('#calendar-filter').datetimepicker();
    // });
    eventView.populateFilters();

  module.eventView = eventView;
})(window);
