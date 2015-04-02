angular.module('NoteWrangler')
	.controller('NotesIndexController', 
		['$http','$scope', function($http, $scope){
			// $http({method:"GET", url:'/notes'})
			// _this = this; 
			$http.get('/notes').success(function(data){
				// _this.data = data
				$scope.data = data;
			});
		}]);