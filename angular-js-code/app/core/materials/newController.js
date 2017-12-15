(function() {
    'use strict';

    angular.module('app.materials.new', ['ui.router', 'app.categoriesService'])

    .controller('MaterialsNewController', MaterialsNewController);

    MaterialsNewController.$inject = ['$http', '$scope', '$state', '$log', 'categoriesService'];

    function MaterialsNewController($http, $scope, $state, $log, categoriesService) {
        var vm = this;

        vm.addMaterial = addMaterial;
        vm.categories = [];
        vm.formData = {
            type: vm.categories[0],
            estimates: vm.estimates = 1
        };

        function addMaterial() {
            var query = 'mutation {  materialCreate(name: "' + vm.formData.materialName + '",description:"' + vm.formData.materialDescription + '",price:"100",image:"ggg.gif"){ id name       description  }}';
			
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

            vm.formData.newMaterial = '';
            $state.go('root.materials.list', {}, {
                reload: true
            });
            //$state.go('root.stores.list');
        }
    }
})();