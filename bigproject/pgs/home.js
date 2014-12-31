/**
 * Created by pl on 12/30/2014.
 */
var homepage = angular.module('homePage',[]);
homepage.controller('homePageController', ['$scope', 'functions', function(scope, functionzz) {
    scope.clicked = function (thevalue) {
        return scope.message = functionzz.selectfunction(thevalue);
    };
}]);

homepage.value('menusItem', {
    homeaction: "Home",
    orderaction: "Orders",
    reportaction: "Reports"
});

homepage.service('functions', ['menusItem', function(menu){
    this.selectfunction = function(actions){
        return menu[actions] + " selected.";
    };
}]);