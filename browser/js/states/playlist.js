app.config(function ($stateProvider){
	$stateProvider.state('Playlist', {
		url: '/playlist/:playlistId',
		templateUrl: '/templates/playlist.html',
		controller: 'PlaylistCtrl',
		resolve: {
			thePlaylist: function(PlaylistFactory, $stateParams){
				return PlaylistFactory.fetchById($stateParams.playlistId);
			},
			theSongs: function(SongFactory){
				return SongFactory.fetchAll();
			}
		}
	})

});