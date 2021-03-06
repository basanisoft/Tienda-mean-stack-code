(function() {
    'use strict';

    angular.module('app.todos.new', ['ui.router', 'app.categoriesService'])

    .controller('TodosNewController', TodosNewController);

    TodosNewController.$inject = ['$http','$scope', '$state', '$log', 'categoriesService'];

    function TodosNewController($http, $scope, $state, $log, categoriesService) {
        var vm = this;

        vm.addStoreMaterial = addStoreMaterial;
        vm.categories = [];
        vm.materials = [];
        vm.formData = {
            type: vm.categories[0],
            materials: vm.materials[0]
        };

        retrieve();

        retrieveMaterial();

        function retrieve() {
            return getCategories().then(function() {
                $log.info('Retrieved Categories');
            });
        }

        function retrieveMaterial() {
            return getMaterial().then(function() {
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

        function getMaterial() {
            return categoriesService.getMaterials()
                .then(function(data) {
                    vm.materials = data;
                    return vm.materials;
                });
        }

        function addStoreMaterial() {
            
            var query = 'mutation {  storematerialCreate(material_id: "' + vm.formData.material + '",store_id:"' + vm.formData.store + '",quantity:"' + vm.formData.quantity  + '",created_at:"2017-12-11 00:00:00"){ id material{id} store{id}     quantity  }}';
			
			
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

            $scope.IC.todos.push({
                'quantity': vm.formData.quantity,
                'done': false,
                'store': vm.formData.store,
                'material': vm.formData.material
            });
            vm.formData.quantity = '';
            $state.go('root.todos.list', {}, {
                reload: true
            });
        }
    }
})();