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
        return (a / b).toFixed(2);
    };
});

calc.controller('calculator', function($scope, Math){
    $scope.Xaddition = function(){
        $scope.answer = function(){
            return Math.addition($scope.anumber, $scope.bnumber);
        }
        $scope.operator = 'Addition';
    }
    $scope.Xsubtraction = function(){
        $scope.answer = function(){
            return Math.subtraction($scope.anumber, $scope.bnumber);
        }
        $scope.operator = 'Subtraction';
    }
    $scope.Xmultiplication = function(){
        $scope.answer = function(){
            return Math.multiplication($scope.anumber, $scope.bnumber);
        }
        $scope.operator = 'Multiplication';
    }
    $scope.Xdivision = function(){
        $scope.answer = function(){
            return Math.division($scope.anumber, $scope.bnumber);
        }
        $scope.operator = 'Division';
    }
});