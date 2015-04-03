angular.module('NoteWrangler')
	.controller('NotesIndexController', 
		['Note','$scope', function( Note, $scope ){
			
			$scope.data = Note.query();
				
				
		}]);