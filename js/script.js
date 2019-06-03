var P = angular.module("P"[])

P.controller("Pokemon", function($scope,$rooteScope,$http){
	
	$scope.ListadoPokemon = [];

	for(var z=1 )

	$http({
		metod: "GET",
		url: "https://pokeapi.co/api/v2//pokemon/150"
	}).then(function Datos(x) {
		console.log(x);
		$scope.ListadoPokemon.push(x);
	})

});