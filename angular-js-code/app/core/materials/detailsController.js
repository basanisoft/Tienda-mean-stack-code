(function() {
    'use strict';

    angular.module('app.materials.details', ['ui.router', 'app.materialsService'])

    .controller('MaterialsDetailsController', MaterialsDetailsController);

    MaterialsDetailsController.$inject = ['$stateParams', '$state', 'materialsService'];

    function MaterialsDetailsController($stateParams, $state, materialsService) {
        var vm = this;

        vm.delete = deleteById;
        vm.material = materialsService.getById($stateParams.storeId);

        function deleteById(materialId) {
            materialsService.deleteById(materialId);
            $state.go('root.materials.list');
        }
    }
})();