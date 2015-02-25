/**
 * Created by pl on 2/24/15.
 */
var pizzaController = angular.module("pizzaController", []);

pizzaController.controller('pizzapagecontoller', function($scope, $http){
    $http.get("dependencies/data/pizza.json").success(function(data, headers, status, config){
        $scope.pizza = data;
    });
});