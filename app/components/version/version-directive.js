'use strict';

angular.module('myApp.version.version-directive', [])

.directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}])

.directive('currentTime',['$interval','dateFilter',function($interval,dateFilter){
  function link(scope,element,attrs){
    var format,timeoutId;
    function updateTime(){
      element.text(dateFilter(new Date(),format));
    }

    scope.$watch(attrs.currentTime,function(value){
      format = value;
      updateTime();
    })

    element.on('$destroy',function(){
      $interval.cancel(timeoutId);
    })

    timeoutId = $interval(function(){
      updateTime()
    },1000);
  }

  return {
    link:link
  };
}])

.directive('myTabs',function(){
  return{
    restrict:'E',
    transclude:true,
    scope:{},
    controller:['$scope',function($scope){
      var panes = $scope.panes = [];
      $scope.select = function(pane){
        angular.forEach(panes,function(pane){
          pane.selected = false;
        });
        pane.selected = true;
      };

      this.addPane = function(pane){
        if(panes.length === 0)
        {
          $scope.select(pane);
        }
        panes.push(pane);
      };
    }],
    templateUrl:'/app/components/version/my-tabs.html'
  }
})

.directive('myPane',function(){
  return {
    require: '^^myTabs',
    restrict: 'E',
    transclude: true,
    scope: {
      title: '@'
    },
    link: function(scope, element, attrs, tabsCtrl) {
      tabsCtrl.addPane(scope);
    },
    templateUrl: '/app/components/version/my-pane.html'
  };
})
