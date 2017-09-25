var app = angular.module("MyFirstApp",[]);
app.controller("FirstController",["$scope",function(m){
	m.nombre = "Israel";
	m.nuevoComentario = {};
	m.comentarios = [
	{
		comentario: "Buen tutorial",
		username:"israel"
	},
	{
		comentario: "Otro ejemplo",
		username:"iduran"
	}
	];
	m.agregarComentario = function(){
		m.comentarios.push(m.nuevoComentario);
	    m.nuevoComentario = {};
	}
}]);