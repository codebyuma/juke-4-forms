// app.factory('PlaylistFactory', function ($http){
// 	var PlaylistFactory = {};

// 	PlaylistFactory.create = function (data){
// 		//console.log("in playlistfactory create");
// 		return $http.post('/api/playlists', data)
// 		.then(function (response) {
// 			return response.data;
// 		});
// 	}


// 	PlaylistFactory.getAll = function (){
// 		return $http.get('/api/playlists')
// 		.then(function (response) {
// 			return response.data;
// 		});

// 	}

// 	return PlaylistFactory;


// })

app.factory('PlaylistFactory', function ($http) {

    var cachedPlaylists = [];

    var PlaylistFactory = {};

    PlaylistFactory.fetchAll = function () {
        return $http.get('/api/playlists')
        .then(function (response) {
            angular.copy(response.data, cachedPlaylists);
            return cachedPlaylists;
        });
    };

    PlaylistFactory.create = function (data) {
        return $http.post('/api/playlists', data)
        .then(function (response) {
            var playlist = response.data
            cachedPlaylists.push(playlist);
            return playlist;
        });
    };

    PlaylistFactory.fetchById = function (playlistId){

    	return $http.get('/api/playlists/' + playlistId)
    	.then (function (response){
    		var playlist = response.data
            return playlist;
    	})
    }

    return PlaylistFactory;

});