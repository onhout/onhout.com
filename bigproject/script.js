/**
 * Created by pl on 12/29/2014.
 */
var navbar = angular.module('Navbar', ['ui.bootstrap', 'ngAnimate', 'ngRoute', 'home', 'usersApp', 'orders']);

navbar.controller('NavbarController', function($scope, $timeout, $modal){
    /*scope.clicked = function(thevalue){
        return scope.message = functionzz.selectfunction(thevalue);
    };*/
    $scope.alerts = [];

    $scope.addAlert = function(thetype, themsg) {
        $scope.alerts.push({type: thetype, msg: themsg}); //type: success(green) or none(yellow)
        $timeout(function(){$scope.closeAlert();},3000);
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
//signin modal
    $scope.open = function () {

        var modalInstance = $modal.open({
            templateUrl: 'pgs/login.html',
            controller: 'ModalInstanceCtrl',
            backdrop: true/*,
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }*/
        });

        modalInstance.result.then(function (dataObject) {
            if (dataObject){
                $scope.addAlert('success', 'Welcome, '+dataObject.first_name);
            }
            $scope.sqlObject = dataObject;

        }, function () {
            console.log('Modal dismissed at: ' + $scope.selected);
        });
    };
});
navbar.controller('ModalInstanceCtrl', function ($scope, $modalInstance) {

    $scope.ok = function (dataObject) {
        $modalInstance.close(dataObject);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});
//configure routes

navbar.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl:'pgs/home.html'
        })
        .when('/orders', {
            templateUrl: 'pgs/orders.html'
        })
        .otherwise({
            redirectedTo: '/'
        });
        //.when('/signin', {
        //    templateUrl: 'pgs/login.html',
        //    controller: 'popUpController'
        //});
});

/*navbar.controller('homePageController', function($scope){
    $scope.message = 'Home';
});*/

navbar.controller('ordersController', function($scope){
    $scope.message = 'Orders';
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

//navbar.controller('NavBarController', function ($scope, $modal) {


//});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

