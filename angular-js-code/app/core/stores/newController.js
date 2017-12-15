(function() {
    'use strict';

    angular.module('app.stores.new', ['ui.router', 'app.categoriesService'])

    .controller('StoresNewController', StoresNewController);

    StoresNewController.$inject = ['$http','$scope', '$state', '$log', 'categoriesService'];

    function StoresNewController($http, $scope, $state, $log, categoriesService) {
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
			
			var config = {
                headers : {
					'Content-Type': 'application/json'
                }
            }

			$http.post('http://localhost:8088/graphql', JSON.stringify({query: query}), config)
		     .then(
			   function(response){
				 location.reload();
			   }, 
			   function(response){
				 // failure callback
			   }
			);


            vm.formData.newStore = '';
            $state.go('root.stores.list', {}, {
                reload: true
            });
            //$state.go('root.stores.list');
        }
    }
})();