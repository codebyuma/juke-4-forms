var app = angular.module('juke', ['ui.router']);


app.controller("SidebarCtrl", function ($scope, PlaylistFactory){

	PlaylistFactory.fetchAll()
	.then (function (playlists){
		$scope.playlists = playlists;
	})
	

})