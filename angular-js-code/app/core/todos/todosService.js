(function() {
    'use strict';

    angular.module('app.todosService', [])

    .factory('todosService', todosService);

    todosService.$inject = ['$http', '$log', '$q'];

    function todosService($http, $log, $q) {
        return {
            getTodos: getTodos
        };

        function getTodos() {
            var storematerials;
            var query = "{storematerials{id, quantity, store{id, store_name},material{id, name,description}} materials{id,name}  stores{id,store_name}}";
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
                    storematerials = data.data.storematerials;

                },
                error: function(data) {
                    alert("err:" + data);
                }

            });
            //return storematerials;
            return $http.get('')
                .then(getTodosComplete)
                .catch(getTodosFailed);

            function getTodosComplete(response) {
                return storematerials;
            }

            function getTodosFailed(e) {
                var newMessage = 'XHR Failed for getStoreMaterial.';
                $log.error(newMessage);
                return $q.reject(e);
            }
        }

    }
})();