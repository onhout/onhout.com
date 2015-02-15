/**
 * Created by pl on 2/12/15.
 */
var onlineapp = angular.module("orderapp", []);

onlineapp.controller("onlineorder", function($scope, $http){
    var datastring = "dependencies/data/menu.json";
    $scope.menu = {};
    $http.get(datastring).success(function(data, headers, status, config){
        $scope.menu = data;
    });

    $(".pickupbutton").click(function(){
        $(this).attr("data-toggle", "modal").attr("data-target", "#myModal");
    });

});