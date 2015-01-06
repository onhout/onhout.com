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
        });
        request.error(function(data){
            $scope.errorMessage = "Please check your logins and try again";
        })
    };

    $scope.register = function(){
      var request = $http({
          method: "post",
          url: "http://onhout.myclassacdl.com/onhout.com/bigproject/data/register.php",
          data: {
              userName: $scope.userName,
              password: $scope.password,
              email: $scope.email,
              first_name: $scope.first_name,
              last_name: $scope.last_name,
              business_name: $scope.business_name,
              business_address: $scope.business_address,
              business_phone: $scope.business_phone
          }
      });
        request.success(function (data){
            console.log("registration success");
        });
        request.error(function(data){
            console.log("registration error");
        });
    };
});

