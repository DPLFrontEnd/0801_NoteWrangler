angular.module('NoteWrangler')
	.controller('NoteShowController', 
		['Note','$scope', '$routeParams', '$location',
			function( Note, $scope, $routeParams, $location){
			// $http({method:"GET", url:'/notes'})

			$scope.data = Note.get({id: $routeParams.id});	

			$scope.deleteNote = function(note){
				Note.remove({id: note.id});
					
				$location.path('/notes/');
			};
	}]);