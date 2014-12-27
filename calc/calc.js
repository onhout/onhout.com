/**
 * Created by pl on 12/27/2014.
 */
var calc = angular.module('calc', []);

calc.service('Math', function(){
    this.addition = function(a, b){
        return a + b;
    };
    this.subtraction = function(a, b){
        return a - b;
    };
    this.multiplication = function(a, b){
        return a * b;
    };
    this.division = function(a, b){
        return a / b;
    };
});

calc.controller('calculator', function($scope, Math){
    $scope.Xaddition = function(){
        $scope.answer = Math.addition($scope.anumber, $scope.bnumber);
        $scope.operator = 'Addition';
    }
    $scope.Xsubtraction = function(){
        $scope.answer = Math.subtraction($scope.anumber, $scope.bnumber);
        $scope.operator = 'Subtraction';
    }
    $scope.Xmultiplication = function(){
        $scope.answer = Math.multiplication($scope.anumber, $scope.bnumber);
        $scope.operator = 'Multiplication';
    }
    $scope.Xdivision = function(){
        $scope.answer = Math.division($scope.anumber, $scope.bnumber);
        $scope.operator = 'Division';
    }
});