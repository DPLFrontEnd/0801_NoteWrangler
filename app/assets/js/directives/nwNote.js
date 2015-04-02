angular.module('NoteWrangler')
	.directive('nwNote', function(){
		return {
			restrict: 'E', // 'A'
			templateUrl: 'assets/templates/directives/nwNote.html',
			scope: {
				title: "=",
				link: '=',
				description: '=', // this creates a two-way binding (i.e. the data gets updated whenever it changes).
				category: '@' // this will pass the data as a string.
			}
		}
	});