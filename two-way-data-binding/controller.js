var app = angular.module("MyFirstApp",[]);
app.controller("FirstController",function($scope){
	$scope.nombre = "Israel";
	$scope.nuevoComentario = {};
	$scope.comentarios = [
	{
		comentario: "Buen tutorial",
		username:"israel"
	},
	{
		comentario: "Otro ejemplo",
		username:"iduran"
	}
	];
	$scope.agregarComentario = function(){
		$scope.comentarios.push($scope.nuevoComentario);
		$scope.nuevoComentario = {};
	}
});