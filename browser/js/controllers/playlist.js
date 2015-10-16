app.controller('PlaylistCtrl', function ($scope, $stateParams, thePlaylist, PlayerFactory, theSongs) {

	$scope.playlist = thePlaylist;
	$scope.songs = theSongs;

	$scope.isCurrent = function (song){
		var current = PlayerFactory.getCurrentSong();
		return current && current._id == song._id;
	}

	$scope.start = function (song) {
		PlayerFactory.start(song, $scope.playlist.songs);
	};
	
	


});