(function() {
    'use strict';

    angular.module('app.materials.list', ['app.materialsService'])

    .controller('MaterialsListController', MaterialsListController);

    MaterialsListController.$inject = ['materialsService'];

    function MaterialsListController(materialsService) {
        var vm = this;

        vm.materials = materialsService.getAll();
        vm.deleteCompleted = deleteCompleted;

        function deleteCompleted() {

            //alert(item.done);
            $scope.albumNameArray = [];
            angular.forEach($scope.materials, function(material) {
                if (!!material.selected) $scope.albumNameArray.push(material.id);
            })
            $scope.MLC.todos = $scope.MLC.todos.filter(function(item) {
                return !item.selected;
            });
        }

    }
})();