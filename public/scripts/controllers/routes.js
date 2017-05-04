'use strict';

page('/', indexController.render);
page('/db', Database.fetchAll);
page();
