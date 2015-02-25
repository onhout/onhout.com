var saladController = angular.module("saladController", []);

saladController.controller("saladpagecontroller", function($scope, $http){
    $http.get("dependencies/data/saladsticks.json").success(function(data, headers, status, config){
        $scope.saladsticks = data;
    });
});