var ngTest = angular.module('ngTest', ['ui.router', 'ngAnimate']);

ngTest.controller('TestController', function($scope, productService, $location){
	$scope.addProduct = function(){
		productService.addProduct($scope.newProduct)
		$scope.newProduct = ''
		$location.path('/home/2/Second')
	}
	$scope.firstSum = 0
	$scope.secondSum = 0
	$scope.thirdSum = 0
	$scope.total = 0
	$scope.update = function(){
    $scope.total = 0
    var array = [parseInt($scope.firstSum),parseInt($scope.secondSum),parseInt($scope.thirdSum)]
     for(var i = 0; i < array.length; i++){
       if(array[i].toString() === 'NaN'){
        continue;
       } else {
        $scope.total += array[i]
       }
     }

	};

	$scope.newNumber = function(){
    $scope.secondSum = ($scope.total - $scope.firstSum) / 2
    $scope.thirdSum = ($scope.total - $scope.firstSum) / 2
	}

})
ngTest.controller('SecondController', function($scope, productService){
	console.log(productService.getProducts())
	console.log('Got to the Second controller')
	$scope.list = productService.getProducts()
})
ngTest.controller('ThirdController', function($scope){
	$scope.sortType     = 'name'; // set the default sort type
	$scope.sortReverse  = false;  // set the default sort order
	$scope.searchCountry   = '';     // set the default search/filter term
	$scope.longArray = data;
})

ngTest.config(function($stateProvider, $urlRouterProvider) {
 
    $stateProvider
        .state('home', {
            url: '/home/:page/:ctrl',
            templateUrl: function($stateParams){
            	return 'pages/page' + $stateParams.page +'.html'
            },
            controllerProvider : function($stateParams){
            	return $stateParams.ctrl+ 'Controller'
            }
        })
    $urlRouterProvider.otherwise('/home/1/Test');
})

ngTest.service('productService', function() {
  var productList = [];

  var addProduct = function(newObj) {
      productList.push(newObj);
  };

  var getProducts = function(){
      return productList;
  };

  return {
    addProduct: addProduct,
    getProducts: getProducts
  };

});

ngTest.directive('moveFocus', function() {
    return {
      restrict: 'A',
      link: function(scope, elem, attr) {
        var tabindex = parseInt(attr.tabindex);
        var maxlength = parseInt(attr.maxlength);

        elem.on('input, keydown', function(e) {
          var val = elem.val(),
              cp, 
              code = e.keyCode;

          if (val.length === maxlength && [8, 37, 38, 39, 40, 46].indexOf(code) === -1) {
            var next = document.querySelectorAll('#input' + (tabindex + 1));
            console.log(next.length && next[0].focus())
            next.length && next[0].focus();
            return;
          }

          cp = this.setSelectionRange && this.selectionStart;
          if ((cp === 0 && code === 46) || (cp === 1 && code === 8)) {
            var prev = document.querySelectorAll('#input' + (tabindex - 1));
            e.preventDefault();
            elem.val(val.substring(1));
            prev.length && prev[0].focus();
            return;
          }
        });
      }
    };
  });