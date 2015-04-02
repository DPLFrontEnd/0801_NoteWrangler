angular.module('NoteWrangler')
	.controller('NoteEditController', 
		['$http','$scope', '$routeParams', function($http, $scope, $routeParams){
			// $http({method:"GET", url:'/notes'})
			// _this = this; 
			$http.get('/notes/'+$routeParams.id).success(function(data){
				// _this.data = data
				$scope.data = data;
			});

			$scope.saveNote = function(note){
				console.log(note);
				$http({method:"PUT", url:'/notes/'+ note.id, headers: "", data: note }).success(function(data){
					console.log("SUCCESS");
					console.log(data);
				}).error(function(data){
					console.log("ERROR");
					console.log(data);
				});
			}
		}]);