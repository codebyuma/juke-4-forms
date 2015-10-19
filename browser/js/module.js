var app = angular.module('juke', ['ui.router', 'ngMessages']);


app.controller("SidebarCtrl", function ($scope, PlaylistFactory){

	PlaylistFactory.fetchAll()
	.then (function (playlists){
		$scope.playlists = playlists;
	})
	

})