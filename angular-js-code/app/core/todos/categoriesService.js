(function() {
    'use strict';
    angular.module('app.categoriesService', [])

    .factory('categoriesService', ['$http', '$log', '$q', function($http, $log, $q) {
        return {
			getMaterials: function () {
				var materials;
				var query = "{materials{    id,    name }}";
				var config = {
					headers : {
						'Content-Type': 'application/json'
					}
				}
				 var promise = $http.post('http://localhost:8088/graphql', JSON.stringify({query: query}), config)
				 .then(
				   function(data){
					 return data.data.data.materials;
				   }, 
				   function(response){
				   }
				);
				return promise;
			},
            getCategories: function () {
				var stores;
				var query = "{stores{    id,    store_name }}";
				var config = {
					headers : {
						'Content-Type': 'application/json'
					}
				}
				var promise = $http.post('http://localhost:8088/graphql', JSON.stringify({query: query}), config)
				 .then(
				   function(data){
					 return data.data.data.stores;
				   }, 
				   function(response){
				   }
				);
				return promise;
			}
			
        };
    }]);
})();