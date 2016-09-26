angular.module('first',[]).controller('TestController', function($scope, productService, $location){
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