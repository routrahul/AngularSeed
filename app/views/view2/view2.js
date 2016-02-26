'use strict';

angular.module('ecom.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/view2', { templateUrl: '/app/views/view2/view2.html', controller: 'View2Ctrl' })
}])


.controller('View2Ctrl',['$scope','$location','$http',function($scope,$location,$http){

  $scope.category = 1;

  $scope.products = [
    {
      id:"prod1",
      img:"/app/img/4.jpg",
      name:"First Product",
      price:"$24.99",
      text:"See more snippets like this online store item at Bootsnipp",
      stars:[{star:1},{star:1},{star:1},{star:0},{star:0}],
      category:1
    },
    {
      id:"prod2",
      img:"/app/img/5.jpg",
      name:"Second Product",
      price:"$64.99",
      text:"This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      stars:[{star:1},{star:1},{star:1},{star:1},{star:0}],
      category:2
    },
    {
      id:"prod3",
      img:"/app/img/6.jpg",
      name:"Second Product",
      price:"$124.99",
      text:"This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      stars:[{star:1},{star:0},{star:0},{star:0},{star:0}],
      category:1
    }
  ];

  $scope.setCategory = function(categoryPassed){
    $scope.category = categoryPassed;
  }

}])
