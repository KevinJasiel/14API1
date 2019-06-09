var P = angular.module("P",[])

P.controller("Pokemon", function($scope,$rootScope,$http){
	
		/*$scope.ListadoPokemon = [];
		for(var z=1;z<100;z++)
		$http({
			metod: "GET",
			url: "https://pokeapi.co/api/v2/pokemon/"+z
		}).then(function Datos(x) {
			$scope.ListadoPokemon.push(x);
			console.log(x);
		})*/


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

		$scope.ListadoPokemon = [];
		for(var i=1;i<100;i++)
			$http({
				metod: "GET",
				url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"+i
			}).then(function )
});