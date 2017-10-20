(function(){
    angular.module("profile-app")
            .controller("showProfileCtrl",function($scope){
                $scope.profile = {
                    Name :"Bailasan",
                    Age :"21",
                    Bithdate:"20/12/1996"
                };
            })
})()