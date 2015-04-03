angular.module('NoteWrangler')
	.controller('NoteCreateController', 
		['Note','$scope', '$routeParams', '$location', 
			function(Note, $scope, $routeParams, $location){
				$scope.isSubmitting = false;
				$scope.isNew = true;
				
				$scope.note = new Note();
				
				$scope.saveNote = function(note){
					$scope.isSubmitting = true;
					note.save();
					$scope.isSubmitting = false;
					$location.path("/notes/" + note.id);
						
							
						
					
				}
		}]);