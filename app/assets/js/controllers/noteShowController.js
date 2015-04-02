angular.module('NoteWrangler')
	.controller('NoteShowController', 
		['$http','$scope', '$routeParams', function($http, $scope, $routeParams){
			// $http({method:"GET", url:'/notes'})
			// _this = this; 
			$http.get('/notes/'+$routeParams.id).success(function(data){
				// _this.data = data
				$scope.data = data;
			});
		}]);