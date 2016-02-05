angular.module('myApp.view5', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view5', {
    templateUrl: 'view5/view5.html',
    controller: 'View5Ctrl'
  });
}])

.controller('View5Ctrl', ['$scope',function($scope) {
  $scope.colours = [{
		name: "Red",
		hex: "#F21B1B"
	}, {
		name: "Blue",
		hex: "#1B66F2"
	}, {
		name: "Green",
		hex: "#07BA16"
	}];
	$scope.colour = "";
}])

.directive("myOne",function(){
  return{
    restrict:'E',
    compile:function(elem,attrs){
      console.log("Compile");
    },
    scope:{
      data:'=data'
    },
    templateUrl:"/app/view5/myDropDown.html"
  }
})
