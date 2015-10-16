app.config(function ($stateProvider){
	$stateProvider.state('newPlaylist', {
		url: '/playlist/new',
		templateUrl: '/templates/newPlaylist.html',
		controller: 'NewPlaylistCtrl'
		// resolve: {
		// 	theAlbum: function (AlbumFactory, $stateParams) {
		// 		return AlbumFactory.fetchById($stateParams.albumId);
		// 	}
		// }
	});

});