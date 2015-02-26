/**
 * Created by pl on 2/12/15.
 */
var onlineapp = angular.module("orderapp", ['ngRoute']);

onlineapp.controller("onlineorder", function($scope){
    $scope.orderitems=[];
    $scope.additem = function(name, addons, price){
        $scope.orderitems.push({"item":name, "addons":addons, "price":price});
        console.log($scope.orderitems);
    };

    $scope.total = function(){
        var totalprice = 0;
        for(var i =0; i < $scope.orderitems.length; i++){
            totalprice = totalprice + $scope.orderitems[i].price;
        }
        return (totalprice * 1.09 + 2.99).toFixed(2);
    }
});

onlineapp.service("changestuff", function($http, $scope){
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