app.controller('PlaylistCtrl', function ($scope, $stateParams, thePlaylist, PlayerFactory, theSongs, PlaylistFactory) {

	$scope.playlist = thePlaylist;


	$scope.songs = theSongs;

	$scope.isCurrent = function (song){
		var current = PlayerFactory.getCurrentSong();
		return current && current._id == song._id;
	}

	$scope.start = function (song) {
		PlayerFactory.start(song, $scope.playlist.songs);
	};
	
	$scope.addSong = function (song){

		var theSong = angular.fromJson(song);
		
		
		// for (var i=0; i<$scope.songs.length; i++){
		// 	if ($scope.songs[i]._id == song){
		// 		var theSong = $scope.songs[i];
		// 		console.log("the song: ", theSong);
		// 		break;
		// 	}
		// }

		PlaylistFactory.addSong(theSong, $scope.playlist._id)
		.then (function (response){
			response.audioUrl = '/api/songs/' + response._id + '.audio';
			$scope.playlist.songs.push(response);
			$scope.addSongForm.$setPristine();
			$scope.selectedSong = " ";
			//console.log("back in controlller ", response);
		})

	}
	
	$scope.removeSong = function (song){
		console.log("start of remove song, song: ", typeof song);

		PlaylistFactory.removeSong(song, $scope.playlist._id)
		.then (function (response){
			console.log("after deleting from DB, we're here! ", response);
		
			 for (var i=0; i<$scope.playlist.songs.length; i++){
			    if ($scope.playlist.songs[i]._id == song._id){
			      $scope.playlist.songs.splice(i, 1);
			      break;
			    }
			  }

			$scope.addSongForm.$setPristine();
			$scope.selectedSong = " ";
		})
	}


});