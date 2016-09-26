angular.module('second',[])
.controller('SecondController', function($scope, productService){
	console.log(productService.getProducts())
	console.log('Got to the Second controller')
	$scope.list = productService.getProducts()
})