(function () {
    'use strict';

    angular.module('app', [
        'ui.router',
        'app.index',
		'app.stores.list',
		'app.stores.new',
		'app.materials.new',
		'app.materials.list',
        'app.nav.breadcrumbs',
        'app.nav.footer',
        'app.nav.header',
        'app.nav.menu',
        'app.todos.new',		
        'app.todos.list',		
        'app.directives.datepicker',
        'app.directives.about',
        'app.filters'
    ]);
})();
