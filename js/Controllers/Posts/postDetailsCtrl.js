(function(){
    angular.module("main-app")
            .controller("postDetailsCtrl",function($scope , getPostSrv , $routeParams,$route){
                getPostSrv.getPost($routeParams.postId)
                            .success(function(data){
                                $scope.Post = data;
                            });

                            console.log($route.current.foo);
                            console.log($route.current.params.postId);

                            
            })
})()