app.controller('NewPlaylistCtrl', function ($scope, $state, $stateParams, PlaylistFactory) {
	$scope.printPlaylist = function (){


		PlaylistFactory.create($scope.playlist)
		.then (function (data){
			$scope.newPlaylistForm.$dirty = false;
			$scope.playlist.name="";
			$state.go("Playlist", {playlistId: data._id});
		})

	}


	
});