/**
 * Created by pl on 1/3/2015.
 */
var user = angular.module('usersApp',[]);
user.controller('userController', function($scope, $http){
    $scope.login= function() {
        console.log("clicked");

        var request = $http({
            method: "post",
            url: "http://onhout.myclassacdl.com/onhout.com/bigproject/data/login.php",
            data: {
                userName: $scope.userName,
                password: $scope.password
            }
        });
        request.success(function (data) {
            console.log(data);
            $scope.ok(data);
        })
    };
});

user.directive('userHead', function(){
});
