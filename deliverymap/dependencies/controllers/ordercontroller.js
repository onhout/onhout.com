/**
 * Created by pl on 2/12/15.
 */
var onlineapp = angular.module("orderapp", ['ngRoute', 'pizzaController', 'saladController']);

onlineapp.controller("onlineorder", function($scope, $http){
    $scope.orderitems = "THIS IS THE RECEIPT";

    $scope.expansion = function(list){
        console.log(list);
    }
});

onlineapp.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl:'dependencies/pages/pizza.html'
        })
        .when('/pizza', {
            templateUrl:'dependencies/pages/pizza.html'
            //controller: 'pizzapagecontroller'
        })
        .when('/saladsticks', {
            templateUrl: 'dependencies/pages/saladsticks.html'
            //controller: 'saladpagecontroller'
        })
        .otherwise({
            redirectedTo: '/'
        });
    //.when('/signin', {
    //    templateUrl: 'pgs/login.html',
    //    controller: 'popUpController'
    //});
});