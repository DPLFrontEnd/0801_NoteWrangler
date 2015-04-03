angular.module('NoteWrangler')
	.controller('NoteShowController', 
		['$http','$scope', '$routeParams', '$location',
			function($http, $scope, $routeParams, $location){
			// $http({method:"GET", url:'/notes'})
			// _this = this; 
			$http.get('/notes/'+$routeParams.id).success(function(data){
				// _this.data = data
				$scope.data = data;
			});

			$scope.deleteNote = function(note){
				$http({method:"DELETE", url:"notes/"+note.id})
					.success(function(data){
						console.log(data);
					})
					.error(function(data){
						console.log("ERROR: "+data);
					});
				$location.path('/notes/');
			};
	}]);