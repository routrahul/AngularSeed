angular.module('ecom', [
  'ngRoute',
  'ecom.view1',
  'ecom.view2'
])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .otherwise({redirectTo: '/view2'})
}])

.directive('myPods', function() {
  return {
    templateUrl: '/app/directives/pods.html'
  };
})

.directive('myCarousel', function() {
  return {
    templateUrl: '/app/directives/carousel.html'
  };
})
