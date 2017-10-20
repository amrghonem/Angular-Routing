(function(){
    angular.module('main-app')
            .controller('homeCtrl',function($scope , $http){

               $scope.Msg = "Hello To Routing In Angular JS.";
                
               $scope.User = {};

               $scope.SignUp = function(){
                $http.post("http://localhost:53152/api/signup",$scope.User)
                    .success(function(data,status){
                        alert(status);
                        alert(data);
                    });
               };
              
            });
})()