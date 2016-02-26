'use strict';

angular.module('ecom.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/view1', { templateUrl: '/app/views/view1/view1.html', controller: 'View1Ctrl' })
}])


.controller('View1Ctrl',['$scope','$location','$http',function($scope,$location,$http){
  console.log("HGello");
}])
