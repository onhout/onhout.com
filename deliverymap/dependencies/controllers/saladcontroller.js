var saladController = angular.module("orderapp");

saladController.controller("saladpagecontroller", function($scope, $http){
    $http.get("dependencies/data/saladsticks.json").success(function(data, headers, status, config){
        $scope.saladsticks = data;
    });
    $scope.orderitems = "SALAD PAGE";
});