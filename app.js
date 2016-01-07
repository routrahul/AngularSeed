angular.module('forms', [
  'ngRoute',
  'forms.landing',
])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .otherwise({redirectTo: '/landing'})
}])
