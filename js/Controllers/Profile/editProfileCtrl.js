(function()
{

    angular.module("profile-app")
    .controller("editProfileCtrl",function($scope){
        $scope.user = {};
   $scope.show=function()
   {
       alert("my name is "+$scope.user.Name + " and i'm "+$scope.user.Age + " years" );
   }
    })
})()