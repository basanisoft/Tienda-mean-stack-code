(function() {
    'use strict';

    angular.module('app.materials.new', ['ui.router', 'app.categoriesService'])

    .controller('MaterialsNewController', MaterialsNewController);

    MaterialsNewController.$inject = ['$scope', '$state', '$log', 'categoriesService'];

    function MaterialsNewController($scope, $state, $log, categoriesService) {
        var vm = this;

        vm.addMaterial = addMaterial;
        vm.categories = [];
        vm.formData = {
            type: vm.categories[0],
            estimates: vm.estimates = 1
        };

        function addMaterial() {
            var query = 'mutation {  materialCreate(name: "' + vm.formData.materialName + '",description:"' + vm.formData.materialDescription + '",price:"100",image:"ggg.gif"){ id name       description  }}';

            $.ajax({
                method: 'post',
                url: 'http://localhost:8088/graphql',
                data: JSON.stringify({
                    query: query
                }),
                contentType: 'application/json',
                success: function(data) {
                location.reload();
                },
                error: function(data) {
                    alert("err:" + JSON.stringify(data));
                }

            });


            vm.formData.newMaterial = '';
            $state.go('root.materials.list', {}, {
                reload: true
            });
            //$state.go('root.stores.list');
        }
    }
})();