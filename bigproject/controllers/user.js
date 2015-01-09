/**
 * Created by pl on 1/3/2015.
 */
var user = angular.module('usersApp',[]);
user.controller('logInController', function($scope, $http){
    var currentUrl = window.location.href;
    /*$scope.fields=[
        {placeholder: 'Username', name:'userName', isRequired:true},
        {placeholder: 'Password', name:'password', isRequired:true},
        {placeholder: 'Confirm Password', name:'confirmpass', isRequired:true},
        {placeholder: 'Email', name:'email', isRequired:true},
        {placeholder: 'First Name', name:'first_name', isRequired:true},
        {placeholder: 'Last Name', name:'last_name', isRequired:true},
        {placeholder: 'Business Name', name:'business_name', isRequired:true},
        {placeholder: 'Business Address', name:'business_address', isRequired:true},
        {placeholder: 'Business Phone Number', name:'business_phone', isRequired:true}
    ];*/
    $scope.login= function() {
        console.log("clicked");
        var request = $http({
            method: "post",
            url: currentUrl.substring(0, currentUrl.lastIndexOf("index.html")) + "data/login.php",
            data: {
                userName: $scope.userName,
                password: $scope.password
            }
        });
        request.success(function (data) {
            console.log(data);
            $scope.ok(data);
        });
        request.error(function(){
            $scope.errorMessage = "Please check your logins and try again";
        })
    };
});
user.controller('registrationController', function($scope, $http){
    var currentUrl = window.location.href;
    $scope.reg = function(){
        var request = $http({
            method: "post",
            url: currentUrl.substring(0, currentUrl.lastIndexOf("index.html")) + "data/register.php",
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
            $scope.ok(data);
            console.log("registration success");
        });
        request.error(function(data){
            console.log("registration error");
        });
    };
});

user.directive('pwConfirm', [function(){
    return {
        require: 'ngModel',
        link: function(scope, elem, attrs, ctrl){
            var password = attrs.ngModel;
            var confirmpassword = attrs.pwConfirm;
            scope.$watch(password, function(){
                ctrl.$setValidity('pwMatch', scope[password]==scope[confirmpassword]);
            });
        }
    }
}]);

