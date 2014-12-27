var MAX_LEN = 200;

angular.module('hello', [])
    .controller('HelloController', function($scope){
    $scope.name = "";
    $scope.getName = function () {
        return ("Hello, ")+$scope.name;
    };
    $scope.remaining = function () {
        return MAX_LEN - $scope.name.length;
    };
});

//var HelloController = function ($scope) {

//};

var ButtonController = function($scope){
    $scope.send = function(){
        alert("Your name is: "+$scope.name);
    };

    $scope.clear = function() {
        $scope.name = "";
    }
};