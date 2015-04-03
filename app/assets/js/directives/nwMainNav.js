angular.module('NoteWrangler')
	.directive('nwMainNav', function(){
		return {
			restrict: "E",
			templateUrl: "/assets/templates/directives/nwMainNav.html",
			controller: function($scope, $location){
				$scope.isPage = function(name){
					return new RegExp( name ).test( $location.path() );
					//  regex starts and ends with /
					//  / \/notes ($|/)/ /
				};
			}
		}
	});