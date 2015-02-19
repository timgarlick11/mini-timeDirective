var app = angular.module('timeApp')

 app.directive('myShowTime', function(){ // remember myShowTime is camel case but on the view it needs to be in snake case
  return {
    restrict: 'E', // this E means that you can only use the directive as an element not an attritbut
     scope: {
            datasource: '=', // this scope allows only the one item being clicked on to be rendered. meaning if I click on the button for reveal time only that button will reveal the time rather than having every button reveal time
            add: '@',
        },
    template: '<button ng-click="add()">Click me to reveal time </button> ' +
    			'<div> this is the new Time {{time}} </div> ' + 
    			'<button ng-click="remove()">Click me to remove time </button> ' , //the {{time}}  is refrencing $scope.time
    link: function(scope, element, attrs){
      scope.add = function() {
      	var currentTime = new Date();
      scope.time = currentTime.toString(); // this function will add the time
      };
      scope.remove = function() {// this function removes the time
      	scope.time = '';
      }
      //'time' is biinding to {{time}} above
    }
  }
});
