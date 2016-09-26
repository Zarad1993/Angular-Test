angular.module('third',[])
.controller('ThirdController', function($scope){
	$scope.sortType     = 'name'; // set the default sort type
	$scope.sortReverse  = false;  // set the default sort order
	$scope.searchCountry   = '';     // set the default search/filter term
	$scope.longArray = data;
})
