'use strict';

angular.module('forms.landing', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/landing', { templateUrl: 'views/landing/landing.html', controller: 'LandingCtrl' })
}])


.controller('LandingCtrl',['$scope','$location','$http',function($scope,$location,$http){

  
}]);
