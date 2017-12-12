(function () {
    'use strict';

    angular.module('app.stores.list', ['app.storesService'])

            .controller('StoresListController', StoresListController);

    StoresListController.$inject = ['storesService'];

    function StoresListController(storesService) {
        var vm = this;

        vm.stores = storesService.getAll();
		
		
		vm.deleteCompleted = deleteCompleted;

        function deleteCompleted() {
			
			//alert(item.done);
			$scope.albumNameArray = [];
  angular.forEach($scope.stores, function(store){
    if (!!store.selected) $scope.albumNameArray.push(store.id);
  })
            $scope.SLC.todos = $scope.SLC.todos.filter(function (item) {
                return !item.selected;
            });
        }
		
		
		
    }
})();
