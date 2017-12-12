(function() {
    'use strict';

    angular.module('app')

    .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', '/todos/list');
        $urlRouterProvider.when('/', '/todos/list');
        $urlRouterProvider.when('/todos', '/todos/list');
        $urlRouterProvider.when('/todos/', '/todos/list');

        //stores
        $urlRouterProvider.when('/stores', '/stores/list');
        $urlRouterProvider.when('/stores/', '/stores/list');
        //materials
        $urlRouterProvider.when('/materials', '/materials/list');
        $urlRouterProvider.when('/materials/', '/materials/list');

        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('root', {
                abstract: true,
                url: '/',
                data: {
                    title: 'Home',
                    breadcrumb: 'Home'
                },
                views: {
                    'header': {
                        templateUrl: 'core/navigation/headerView.html',
                        controller: 'HeaderController',
                        controllerAs: 'HC'
                    },
                    'menu': {
                        templateUrl: 'core/navigation/menuView.html',
                        controller: 'MenuController',
                        controllerAs: 'MC'
                    },
                    'breadcrumbs': {
                        templateUrl: 'core/navigation/breadcrumbsView.html',
                        controller: 'BreadcrumbsController',
                        controllerAs: 'BC'
                    },
                    'content': {
                        template: 'option from menu...'
                    },
                    'footer': {
                        templateUrl: 'core/navigation/footerView.html',
                        controller: 'FooterController',
                        controllerAs: 'FC'
                    }
                }
            })
            .state('root.todos', {
                abstract: true,
                url: 'todos',
                data: {
                    title: 'Todos',
                    breadcrumb: 'Todos'
                }
            })
            .state('root.todos.list', {
                url: '/list',
                data: {
                    title: 'To-do list',
                    breadcrumb: 'List'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/todos/listView.html',
                        controller: 'TodosListController',
                        controllerAs: 'TLC'
                    }
                }
            })
            .state('root.todos.new', {
                url: '/new',
                data: {
                    title: 'New todo',
                    breadcrumb: 'New'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/todos/newView.html',
                        controller: 'TodosNewController',
                        controllerAs: 'TNC'
                    }
                }
            })

        .state('root.stores', {
                abstract: true,
                url: 'stores',
                data: {
                    title: 'Stors',
                    breadcrumb: 'stores'
                }
            })
            .state('root.stores.list', {
                url: '/list',
                data: {
                    title: 'List of stores',
                    breadcrumb: 'List'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/stores/listView.html',
                        controller: 'StoresListController',
                        controllerAs: 'SLC'
                    }
                }
            })
            .state('root.stores.new', {
                url: '/new',
                data: {
                    title: 'New store',
                    breadcrumb: 'New'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/stores/newView.html',
                        controller: 'StoresNewController',
                        controllerAs: 'SNC'
                    }
                }
            })

        .state('root.materials', {
                abstract: true,
                url: 'materials',
                data: {
                    title: 'materials',
                    breadcrumb: 'materials'
                }
            })
            .state('root.materials.list', {
                url: '/list',
                data: {
                    title: 'List of materials',
                    breadcrumb: 'List'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/materials/listView.html',
                        controller: 'MaterialsListController',
                        controllerAs: 'MLC'
                    }
                }
            })
            .state('root.materials.new', {
                url: '/new',
                data: {
                    title: 'New material',
                    breadcrumb: 'New'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/materials/newView.html',
                        controller: 'MaterialsNewController',
                        controllerAs: 'MNC'
                    }
                }
            })

    }
})();