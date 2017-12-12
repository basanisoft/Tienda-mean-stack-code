(function() {
    'use strict';

    angular.module('app.materialsService', [])

    .factory('materialsService', materialsService);

    materialsService.$inject = [];

    function materialsService() {
        var materials = [];

        return {
            deleteById: deleteById,
            getAll: getAll,
            getById: getById
        };

        function getAll() {

            //var materials;	
            var query = "{materials{    id,    name }}";

            $.ajax({
                method: 'post',
                url: 'http://localhost:8088/graphql',
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
            return materials;
        }

        function getById(id) {
            var result = null;
            angular.forEach(mountains, function(m) {
                if (m.id === id) {
                    result = m;
                }
            });
            return result;
        }

        function deleteById(id) {
            angular.forEach(mountains, function(m, i) {
                if (id === m.id) {
                    mountains.splice(i, 1);
                }
            });
        }
    }
})();