/**
 * Created by pl on 12/29/2014.
 */
var navbar = angular.module('Navbar', ['ui.bootstrap', 'ngAnimate', 'ngRoute']);

navbar.controller('NavbarController', ['$scope', function(scope){
   /* scope.clicked = function(thevalue){
        return scope.message = functionzz.selectfunction(thevalue);
    };*/

    scope.alerts = [
        { type: 'danger', msg: 'Just testing out a few things here.' },
        { type: 'success', msg: 'Alerts with fading capability seems working fine.' }
    ];

    scope.addAlert = function() {
        scope.alerts.push({msg: 'Just another alert!'});
        //$timeout(function(){scope.closeAlert();},3000);
    };

    scope.closeAlert = function(index) {
        scope.alerts.splice(index, 1);
    };
}]);
//configure routes

navbar.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl:'pgs/home.html',
            controller: 'homePageController'
        });
});

navbar.controller('homePageController', function($scope){
    $scope.message = 'HELLO, WORLD!'; //yeah I know...
});

/*navbar.value('menusItem', {
    homeaction: "Home",
    orderaction: "Orders",
    reportaction: "Reports"
});

navbar.service('functions', ['menusItem', function(menu){
    this.selectfunction = function(actions){
        return menu[actions] + " selected.";
    };
}]);*/


navbar.animation('.thealerts',function(){
    return{
        enter: function(element,done){
            jQuery(element).hide().fadeIn(300);
            done;

        },
        leave: function(element,done){
            jQuery(element).fadeOut(600,function(){
                done;
            });
        }
    };
});
