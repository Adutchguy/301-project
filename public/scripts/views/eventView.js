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
  $('events').each(function() {
    if (!$(this).hasClass('template')) {
      var val = $(this).find('address a').text();
      var optionTag = `<option value="${val}">${val}</option>`;

      if ($(`#venue-filter option[value="${val}"]`).length === 0) {
        $('#venue-filter').append(optionTag);
      }

      val = $(this).attr('data-category');
      optionTag = `<option value="${val}">${val}</option>`;
      if ($(`#genre-filter option[value="${val}"]`).length === 0) {
        $('#genre-filter').append(optionTag);
      }
    }
  });
};

eventView.handleFilter = function() {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $(`article[data-author="${$(this).val()}"]`).fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#category-filter').val('');
  });
};

eventView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $(`article[data-category="${$(this).val()}"]`).fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#author-filter').val('');
  });
};

eventsView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide();

  $('#articles').on('click', 'a.read-on', function(e) {
    e.preventDefault();
    $(this).parent().find('*').fadeIn();
    $(this).hide();
  });
};

  module.eventView = eventView;
})(window);
