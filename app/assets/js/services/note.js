angular.module('NoteWrangler')
	.factory('Note', ['$resource', function NoteFactory($resource){
		return $resource('/notes/:id', {id: "@id"}, {
			update: {
				method:"PUT"
			},
		});



		// $resource encapsulates ALL of these methods
		// {
			// query: function(){  // Note.all()
			// 	return $http({method:"GET", url:'/notes/' });
			// },
			// get: function(id){ // Note.get(note.id)
			// 	return $http({method:"GET", url:"/notes/"+id});
			// },
			// save: function(note){
			// 	return $http({method:"POST", url:'/notes/', data: note });
			// },
			// remove: function(id){
			// 	return $http({method:"DELETE", url:'/notes/'+id });
			// }
			// delete: function(id){
			// 	return $http({method:"DELETE", url:'/notes/'+id });
			// }

			// NOT INCLUDED BY DEFAULT
			// update: function(note){
			// 	return $http({method:"PUT", url:'/notes/'+note.id, data: note });
			// },
		// }

	}]);