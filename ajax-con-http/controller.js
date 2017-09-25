angular.module("MyFirstApp",[])
	.controller("FirstController",["$scope","$http",function(s,h){
		h.get('https://jsonplaceholder.typicode.com/posts').then(successCallback, errorCallback);
		s.posts = [];
		function successCallback(response){
			console.log(response.data);
			s.posts = response.data;
		}
		function errorCallback(error){
			console.log("error");
		}
	}]);