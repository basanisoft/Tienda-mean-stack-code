(function() {
    'use strict';

    angular.module('app.stores.details', ['ui.router', 'app.storesService'])

    .controller('StoresDetailsController', StoresDetailsController);

    StoresDetailsController.$inject = ['$stateParams', '$state', 'storesService'];

    function StoresDetailsController($stateParams, $state, storesService) {
        var vm = this;
		vm.store = storesService.getById($stateParams.storeId);

        vm.delete = deleteById;
        function deleteById(storeId) {
            storesService.deleteById(storeId);
            $state.go('root.stores.list');
        }
    }
})();