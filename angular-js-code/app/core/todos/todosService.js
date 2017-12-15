(function() {
    'use strict';

    angular.module('app.todosService', [])

    .factory('todosService', todosService);

    todosService.$inject = ['$http', '$log', '$q'];

    function todosService($http, $log, $q) {
        return {
			getTodos: function () {
				var storematerials;
                var query = "{storematerials{id, quantity, store{id, store_name},material{id, name,description}} materials{id,name}  stores{id,store_name}}";
				var config = {
					headers : {
						'Content-Type': 'application/json'
					}
				}
				 var promise = $http.post('http://localhost:8088/graphql', JSON.stringify({query: query}), config)
				 .then(
				   function(data){
					 return data.data.data.storematerials;
				   }, 
				   function(response){
				   }
				);
				return promise;
			}
        };
    }
})();