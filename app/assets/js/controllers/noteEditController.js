angular.module('NoteWrangler')
	.controller('NoteEditController', 
		['Note','$scope', '$routeParams', '$location', 
			function(Note, $scope, $routeParams, $location){
				$scope.isSubmitting = false;
				$scope.isEdit = true;
				// $http({method:"GET", url:'/notes'})
				// _this = this; 
				$scope.data = Note.get({id: $routeParams.id});

				$scope.saveNote = function(data){
					$scope.isSubmitting = true;
					data.$update();
						
					$location.path("/notes/"+data.id);
				}
		}]);