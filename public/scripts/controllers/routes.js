'use strict';

page('/', indexController.render);
page('/db', indexController.render);
page('/team', indexTeamController.team);
page('/home', indexTeamController.home);
page();
