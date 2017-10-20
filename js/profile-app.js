(function(){
    angular.module("profile-app",["ngRoute"])
    .config(function($routeProvider,$locationProvider){
        $routeProvider.when('/showprofile',{
            
            templateUrl:"Templates/showprofile.html",
            controller:'showProfileCtrl'  

        }).when('/editprofile',{
            templateUrl:"Templates/editProfile.html",
            controller:'editProfileCtrl'  

        }).when("/404",{
            templateUrl:"Templates/404page.html",
            controller:'404Ctrl'
        });
        $routeProvider.otherwise({redirectTo:'/404'});


    })
})()