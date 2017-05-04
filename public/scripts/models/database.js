'use strict';

(function(module) {

function Database(rawDataObj) {
  Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
}

Database.all = [];

// Database.prototype.toHtml = function() {
//   let template = Handlebars.compile($('#article-template').text());
//   return template(this);
// };

Database.loadAll = rows => {
  Database.all = rows.map(ele => new Database(ele));
};

Database.fetchAll = callback => {
  $.get('/db')
  .then(
    results => {
      Database.loadAll(results);
      callback();
    }
  )
};

module.Database = Database;
})(window);
