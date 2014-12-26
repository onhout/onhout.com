var MAX_LEN = 200;
var HelloController = function ($scope) {
    $scope.name = "world"
    $scope.getName = function () {
        return $scope.name;
    }

    $scope.remaining = function () {
        return MAX_LEN - $scope.name.length;
    }
}

var ButtonController = function($scope){
    $scope.send = function(){
        alert("Your name is: "+$scope.name);
    }

    $scope.clear = function(){
    }
}