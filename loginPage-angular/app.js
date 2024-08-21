angular.module("loginApp",[])
.controller("LoginController",["$scope",function($scope){
    $scope.user={};
    $scope.loginMessage = "";
    $scope.login = function(){
        if($scope.loginForm.$valid){
            if($scope.user.username === 'admin' && $scope.user.password === "123456"){
                $scope.loginMessage = "Login successful!";
            }else{
                $scope.loginMessage = "Invalid username or password";
            }
        }
    }
}])