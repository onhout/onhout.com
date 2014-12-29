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

calc.controller('calculator', ['$scope', 'Math', function(p1, p2){
    p1.Xaddition = function(){
        p1.answer = function(){
            return p2.addition(p1.anumber, p1.bnumber);
        };
        p1.operator = 'Addition';
    };
    p1.Xsubtraction = function(){
        p1.answer = function(){
            return p2.subtraction(p1.anumber, p1.bnumber);
        };
        p1.operator = 'Subtraction';
    };
    p1.Xmultiplication = function(){
        p1.answer = function(){
            return p2.multiplication(p1.anumber, p1.bnumber);
        };
        p1.operator = 'Multiplication';
    };
    p1.Xdivision = function(){
        p1.answer = function(){
            return p2.division(p1.anumber, p1.bnumber);
        };
        p1.operator = 'Division';
    };
}]);