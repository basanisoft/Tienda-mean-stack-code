(function() {
    'use strict';

    angular.module('app.stores.new', ['ui.router', 'app.categoriesService'])

    .controller('StoresNewController', StoresNewController);

    StoresNewController.$inject = ['$scope', '$state', '$log', 'categoriesService'];

    function StoresNewController($scope, $state, $log, categoriesService) {
        var vm = this;

        vm.addStore = addStore;
        vm.categories = [];
        vm.formData = {
            type: vm.categories[0],
            estimates: vm.estimates = 1
        };

        retrieve();

        function retrieve() {
            return getCategories().then(function() {
                $log.info('Retrieved Categories');
            });
        }

        function getCategories() {
            return categoriesService.getCategories()
                .then(function(data) {
                    vm.categories = data;
                    return vm.categories;
                });
        }

        function addStore() {

            var query = 'mutation {  storeCreate(store_name: "' + vm.formData.storeName + '",description:"' + vm.formData.storeDescription + '"){ id store_name       description  }}';


            $.ajax({
                method: 'post',
                url: 'http://localhost:8088/graphql',
                data: JSON.stringify({
                    query: query
                }),
                contentType: 'application/json',
                success: function(data) {

                },
                error: function(data) {
                    alert("err:" + JSON.stringify(data));
                }

            });


            vm.formData.newStore = '';
            $state.go('root.stores.list', {}, {
                reload: true
            });
            //$state.go('root.stores.list');
        }
    }
})();