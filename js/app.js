(function () {
angular.module("main-app",["ngRoute"])
        .config(function($routeProvider,$locationProvider){
            $routeProvider.when('/allposts',
            {
                templateUrl:"Templates/posts.html",
                controller:'postsCtrl'  
            }).when('/postdetails/:postId',
            {
                // foo :"foooo Data",
                templateUrl:"Templates/post.html",
                controller:'postDetailsCtrl'  
            }).when("/404",{
                templateUrl:"Templates/404page.html",
                controller:"404Ctrl"
            }).when('/',
            {
                templateUrl:"Templates/home.html",
                controller:'homeCtrl'  
            }).when('/home',
            {
                templateUrl:"Templates/home.html",
                controller:'homeCtrl'  
            });
            $routeProvider.otherwise({redirectTo:'/404'});

            // $locationProvider.html5Mode(true);
        });
})()