angular.module('NoteWrangler')
	.controller('NoteEditController', 
		['$http','$scope', '$routeParams', '$location', 
			function($http, $scope, $routeParams, $location){
				$scope.isSubmitting = false;

				// $http({method:"GET", url:'/notes'})
				// _this = this; 
				$http.get('/notes/'+$routeParams.id).success(function(data){
					// _this.data = data
					$scope.data = data;
				});

				$scope.saveNote = function(note){
					$scope.isSubmitting = true;
					$http({method:"PUT", url:'/notes/'+ note.id, data: note })
						.success(function(data){
							console.log("SUCCESS: " + data);
							$scope.isSubmitting = false;
						}).error(function(data){
							console.log("ERROR: " + data);
							$scope.isSubmitting = false;
						});
					$location.path("/notes/"+note.id);
				}
		}]);