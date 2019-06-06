var P = angular.module("P",[])

P.controller("Pokemon", function($scope,$rootScope,$http){
	
		$scope.ListadoPokemon = [];
		for(var z=1;z<100;z++)
		$http({
			metod: "GET",
			url: "https://pokeapi.co/api/v2/pokemon/"+z
		}).then(function Datos(x) {
			$scope.ListadoPokemon.push(x);
			console.log(x);
		})

});