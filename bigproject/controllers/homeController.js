/**
 * Created by pl on 1/2/2015.
 */

var homeapp = angular.module('home', []);

homeapp.controller('homePageController', function($scope){
    $scope.title = 'HOME PAGE WELCOMES U';
});