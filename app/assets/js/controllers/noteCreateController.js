angular.module('NoteWrangler')
	.controller('NoteCreateController', 
		['$http','$scope', '$routeParams', '$location', 
			function($http, $scope, $routeParams, $location){
				$scope.isSubmitting = false;

				$scope.saveNote = function(note){
					$scope.isSubmitting = true;
					$http({method:"POST", url:'/notes/', data: note })
						.success(function(note){
							console.log(note);
							$scope.isSubmitting = false;

							$location.path("/notes/" + note.id);

						}).error(function(data){
							console.log("ERROR: " + data);
							$scope.isSubmitting = false;
						});
					
				}
		}]);