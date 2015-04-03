(function(){

	// 1. Start the application
	angular.module('NoteWrangler', ['ngRoute'])
		.config(function($routeProvider){
			$routeProvider
				.when('/notes', { 
					templateUrl: '/assets/templates/pages/notes/index.html',
					controller:'NotesIndexController',
				})

				.when('/notes/new', { 
					templateUrl: '/assets/templates/pages/notes/edit.html',
					controller:'NoteCreateController',
				})

				.when('/notes/:id', { 
					templateUrl: '/assets/templates/pages/notes/show.html',
					controller:'NoteShowController',
				})

				.when('/notes/:id/edit', { 
					templateUrl: '/assets/templates/pages/notes/edit.html',
					controller:'NoteEditController',
				})

				.when('/users', { 
					templateUrl: '/assets/templates/pages/users/index.html'
				})
				.otherwise({redirectTo: '/notes'});
		});


})();