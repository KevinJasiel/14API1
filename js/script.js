var P = angular.module("P",[])

P.controller("Pokemon", function($scope,$rootScope,$http){
	
		$scope.ListadoPokemon = [];
		for(var z=1;z<200;z++)
		$http({
			metod: "GET",
			url: "https://pokeapi.co/api/v2/pokemon/"+z
		}).then(function Datos(x) {
			$scope.ListadoPokemon.push(x);
			console.log(x);
			for(var a=1,a<100,a++)
			if(a<9){
				$Scope.ListadoPokemon[a].data.sprites.front_default="https://assets.pokemon.com/assets/cms2/img/pokedex/full/00"+a+".png"
			}else if(a>9){
				$Scope.ListadoPokemon[a].data.sprites.front_default="https://assets.pokemon.com/assets/cms2/img/pokedex/full/0"+a+".png"
			}
		})
});