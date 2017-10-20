(function(){
    angular.module("main-app")
            .controller("postsCtrl",function($scope,postsService){
                postsService.getPosts()
                            .success(function(data){
                                $scope.Posts = data;
                            })
            })
})()