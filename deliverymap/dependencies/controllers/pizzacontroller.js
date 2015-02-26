/**
 * Created by pl on 2/24/15.
 */
var pizzaController = angular.module("orderapp");

pizzaController.controller('pizzapagecontroller', function($scope, $http){
    var addonplaceholder = {};
    $http.get("dependencies/data/pizza.json").success(function(data, headers, status, config) {
        $scope.pizza= data;
    });

    $scope.selectsize = function(value, howmuch){
        addonplaceholder.push({"addons":value, "price":howmuch});
    }
});