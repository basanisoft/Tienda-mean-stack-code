(function () {
    'use strict';

    angular.module('app.storesService', [])

            .factory('storesService', storesService);

    storesService.$inject = [];

    function storesService() {
        var stores = [];

        return {
            deleteById: deleteById,
            getAll: getAll,
            getById: getById
        };

        function getAll() {
			
		//var stores;	
     var query = "{stores{    id,    store_name }}";

        $.ajax({
            method: 'post',
            url: 'http://localhost:8088/graphql',
            data: JSON.stringify({
                query: query
            }),
            contentType: 'application/json',
            success: function (data) {
               stores = data.data.stores;
            },
            error: function (data) {
                alert("err:" + data);
            }

        });
		return stores;	
        }

        function getById(id) {
            var result = null;
            angular.forEach(mountains, function (m) {
                if (m.id === id) {
                    result = m;
                }
            });
            return result;
        }

        function deleteById(id) {
            angular.forEach(mountains, function (m, i) {
                if (id === m.id) {
                    mountains.splice(i, 1);
                }
            });
        }
    }
})();
