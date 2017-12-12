(function() {
    'use strict';
    angular.module('app.categoriesService', [])

    .factory('categoriesService', ['$http', '$log', '$q', function($http, $log, $q) {
        return {
            getCategories: getCategories,
            getMaterials: getMaterials
        };

        function getMaterials() {


            var materials;
            var query = "{materials{    id,    name }}";
            //we can use any of the methos to get the data using ajax or http post method
            $.ajax({
                method: 'post',
                url: 'http://localhost:8088/graphql',
                async: false,
                data: JSON.stringify({
                    query: query
                }),
                contentType: 'application/json',
                success: function(data) {
                    materials = data.data.materials;
                },
                error: function(data) {
                    alert("err:" + data);
                }

            });


            return $http.get('')
                .then(getCategoriesComplete)
                .catch(getCategoriesFailed);

            function getCategoriesComplete(response) {
                return materials;
            }

            function getCategoriesFailed(e) {
                var newMessage = 'XHR Failed for getCategories.';
                $log.error(newMessage);
                return $q.reject(e);
            }
        }

        function getCategories() {


            var stores;
            var query = "{stores{    id,    store_name }}";
            //we can use any of the methos to get the data using ajax or http post method
            $.ajax({
                method: 'post',
                url: 'http://localhost:8088/graphql',
                async: false,
                data: JSON.stringify({
                    query: query
                }),
                contentType: 'application/json',
                success: function(data) {
                    stores = data.data.stores;

                },
                error: function(data) {
                    alert("err:" + data);
                }

            });


            return $http.get('')
                .then(getCategoriesComplete)
                .catch(getCategoriesFailed);

            function getCategoriesComplete(response) {
                return stores;
            }

            function getCategoriesFailed(e) {
                var newMessage = 'XHR Failed for getCategories.';
                $log.error(newMessage);
                return $q.reject(e);
            }
        }
    }]);
})();